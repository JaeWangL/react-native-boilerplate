import { SagaIterator } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { APP_SCREEN } from '@/configs';
import { MemberWithAlbumDto } from '@/dtos';
import { navigate } from '@/navigation/navigation.service';
import { getMembersWithAlbumAsync } from '@/services';
import { RootState } from '../rootReducers';
import {
  getAlbumsFailed,
  getAlbumsSuccess,
  setClearAlbum,
  setCurrentAlbum,
  ActionTypes,
  SetCurrentAlbumAction,
} from './actions';

export function* getAlbumsSaga(): SagaIterator {
  const user = yield select((state: RootState) => state.user);
  if (!user.user) {
    return;
  }

  try {
    const res: MemberWithAlbumDto[] | undefined = yield call(
      getMembersWithAlbumAsync,
      user.user.id,
      user.user.accessToken,
    );
    if (!res) {
      return;
    }

    if (res.length === 0) {
      yield put(setClearAlbum());

      navigate(APP_SCREEN.INTRO);
    } else {
      yield put(getAlbumsSuccess({ members: res }));

      navigate(APP_SCREEN.MOMENTS, { member: res[res.length - 1] });
    }
  } catch (error) {
    yield put(getAlbumsFailed({ errorMsg: error }));
  }
}

export function* changeCurrentAlbumSaga({ payload }: SetCurrentAlbumAction): SagaIterator {
  const { index } = payload;

  yield put(setCurrentAlbum({ index }));
}

const root = function* AlbumSaga() {
  yield takeLatest(ActionTypes.GET_ALBUMS, getAlbumsSaga);
  yield takeLatest(ActionTypes.CHANGE_CURRENT_ALBUM, changeCurrentAlbumSaga);
};

export default root;
