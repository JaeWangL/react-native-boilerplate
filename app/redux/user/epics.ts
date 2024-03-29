import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, filter, mergeMap, map } from 'rxjs/operators';
import { signInAsync } from '@/services';
import { RootState } from '../rootReducers';
import { signInFailed, signInRequest, signInSucceed, UserActions } from './slice';

export const signIn$: Epic<UserActions, UserActions, RootState> = (action$) =>
  action$.pipe(
    filter(signInRequest.match),
    mergeMap((action) =>
      from(signInAsync({ email: action.payload.email, hashedPassword: action.payload.password })).pipe(
        map((response) => signInSucceed({ user: response })),
        catchError((e) => of(signInFailed({ errorMsg: e.toString() }))),
      ),
    ),
  );

export default [signIn$];
