import { Epic } from 'redux-observable';
import { filter, map } from 'rxjs/operators';
import { RootState } from '../rootReducers';
import { changeBadge, setBadge, SettingsActions } from './slice';

export const changeBadge$: Epic<SettingsActions, SettingsActions, RootState> = (action$) =>
  action$.pipe(
    filter(changeBadge.match),
    map((action) => setBadge({ tabIndex: action.payload.tabIndex, count: action.payload.count })),
  );

export default [changeBadge$];
