import { Auth } from "./types";

export const AuthRequest = () => ({ type: Auth.AUTH_REQUEST });
export const AuthSuccess = (payload) => ({
  type: Auth.AUTH_SUCCESS,
  payload,
});
export const AuthError = (error) => ({ type: Auth.AUTH_ERROR, error });
export const AuthCreate = (payload) => ({
  type: Auth.AUTH_CREATE,
  payload,
});
export const AuthLogout = (payload) => ({ type: Auth.AUTH_LOGOUT, payload });
