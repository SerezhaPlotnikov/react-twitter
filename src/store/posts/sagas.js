import { call, put, takeEvery, all, fork } from "redux-saga/effects";
// import { eventChannel } from "redux-saga";
// import { CallApi } from "../../api/api";
import { fetchError, fetchSuccess } from "./actions";
import { Posts } from "./types";
import db from "../../firebase";

function* handleFetch() {
	try {
		const snapshot = yield call(db.firestore.getCollection, "posts");
		let posts = [];
		snapshot.forEach((post) => {
			posts.push(post.data());
		});
		if (posts.length === 0) {
			yield put(fetchError("error"));
		} else {
			yield put(fetchSuccess(posts));
		}
	} catch (err) {
		yield put(fetchError(err));
	}
}

function* watchFetchRequest() {
	yield takeEvery(Posts.FETCH_REQUEST, handleFetch);
}

function* mainSaga() {
	yield all([fork(watchFetchRequest)]);
}

export default mainSaga;
