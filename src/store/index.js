import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { PostsReducer } from "./posts/reducers";
import mainSaga from "./posts/sagas";

export const createRootReducer = () =>
	combineReducers({
		posts: PostsReducer,
	});

export function* rootSaga() {
	yield all([fork(mainSaga)]);
}
