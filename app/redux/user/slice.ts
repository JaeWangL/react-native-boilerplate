import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDTO } from '@/dtos';
import { SignInRequestPayload, SignInFailedPayload, SignInSucceedPayload } from './payloads';

export type UserState = {
  isLoading: boolean;
  user?: UserDTO;
  errorMsg?: string;
};

const initialState: UserState = {
  isLoading: false,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInRequest: (state, { payload }: PayloadAction<SignInRequestPayload>) => {
      state.isLoading = true;
    },
    signInFailed: (state, { payload }: PayloadAction<SignInFailedPayload>) => {
      state.isLoading = false;
      state.errorMsg = payload.errorMsg;
    },
    signInSucceed: (state, { payload }: PayloadAction<SignInSucceedPayload>) => {
      state.isLoading = false;
      state.user = payload.user;
    },
  },
});

export const userName = slice.name;
export const userReducer = slice.reducer;
export const { signInRequest, signInFailed, signInSucceed } = slice.actions;
export type UserActionsWithPayload = typeof signInRequest | typeof signInFailed | typeof signInSucceed;
export type UserActions = ReturnType<UserActionsWithPayload>;
