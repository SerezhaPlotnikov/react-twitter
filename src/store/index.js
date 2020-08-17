import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { AuthReducer } from "./auth/reducers";
import AuthSaga from "./auth/sagas";
import { PostsReducer } from "./posts/reducers";
import mainSaga from "./posts/sagas";

export const createRootReducer = () =>
  combineReducers({
    posts: PostsReducer,
    auth: AuthReducer,
  });

export function* rootSaga() {
  yield all([fork(mainSaga), fork(AuthSaga)]);
}
