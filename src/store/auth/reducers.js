import { Auth } from "./types";

const initialState = {
  data: [],
  loading: false,
  error: undefined,
  isAuth: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Auth.AUTH_REQUEST: {
      return { ...state, loading: true };
    }
    case Auth.AUTH_SUCCESS: {
      return { ...state, loading: false, data: action.data, isAuth: true };
    }
    case Auth.AUTH_ERROR: {
      return { ...state, loading: false, error: action.payload, isAuth: false };
    }
    case Auth.AUTH_CREATE: {
      return { ...state, loading: false, data: action.payload, isAuth: false };
    }
    default:
      return state;
  }
};

export { reducer as AuthReducer };
