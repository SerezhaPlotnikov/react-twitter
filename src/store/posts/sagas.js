import { call, put, takeEvery, all, fork, take } from "redux-saga/effects";
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
function* addPost(post) {
	// try {
	yield call(db.firestore.addDocument, "posts", { ...post });
	// 	yield put(AddPost(key));
	// } catch (err) {
	// 	yield put(fetchError(err));
	// }
}

function* watchFetchRequest() {
	yield takeEvery(Posts.FETCH_REQUEST, handleFetch);
	// yield takeEvery(Posts.ADD_POST, addPost);
	while (true) {
		// const { url } = yield take(FETCH_REQUEST);
		// yield fork(handleFetch, url);
		const { post } = yield take(Posts.ADD_POST);
		yield fork(addPost, post);
	}
}

function* mainSaga() {
	yield all([fork(watchFetchRequest)]);
}

export default mainSaga;
