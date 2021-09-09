import { SignInRequest, UserDTO } from '@/dtos';

export const signInAsync = async (data: SignInRequest): Promise<UserDTO> => {
  return {
    id: 1,
    email: 'Test@t.com',
    name: 'Test',
  };
};
