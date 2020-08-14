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
		yield put(fetchSuccess(posts));
	} catch (err) {
		yield put(fetchError(err));
	}
}
function* addPost(post) {
	yield call(db.firestore.setDocument, `posts/${post.postDatabase}`, {
		...post,
	});
}
function* deletePost(postDatabase) {
	yield call(db.firestore.deleteDocument, `posts/${postDatabase}`);
}

function* watchFetchRequest() {
	yield takeEvery(Posts.FETCH_REQUEST, handleFetch);
}
function* watchDeletePost() {
	while (true) {
		const { postDatabase } = yield take(Posts.DELETE_POST);
		yield fork(deletePost, postDatabase);
	}
}
function* watchAddPost() {
	while (true) {
		const { post } = yield take(Posts.ADD_POST);
		yield fork(addPost, post);
	}
}

function* mainSaga() {
	yield all([
		fork(watchFetchRequest),
		fork(watchDeletePost),
		fork(watchAddPost),
	]);
}

export default mainSaga;
