import { UserDTO } from '@/dtos';

export type SignInRequestPayload = {
  email: string;
  password: string;
};

export type SignInFailedPayload = {
  errorMsg: string;
};

export type SignInSucceedPayload = {
  user: UserDTO;
};
