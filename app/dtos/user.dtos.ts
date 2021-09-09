export interface SignInRequest {
  email: string;
  hashedPassword: string;
}

export interface UserDTO {
  id: number;
  email: string;
  name: string;
}
