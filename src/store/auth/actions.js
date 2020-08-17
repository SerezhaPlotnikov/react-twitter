import { Auth } from "./types";

export const AuthRequest = () => ({ type: Auth.AUTH_REQUEST });
export const AuthSuccess = (data) => ({
  type: Auth.AUTH_SUCCESS,
  data,
});
export const AuthError = (error) => ({ type: Auth.AUTH_ERROR, error });
