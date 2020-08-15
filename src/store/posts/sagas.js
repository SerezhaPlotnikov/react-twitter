import firebase from "firebase";
import { all, call, fork, put, take, takeEvery } from "redux-saga/effects";
import db from "../../firebase";
import { fetchError, fetchSuccess } from "./actions";
import { Posts } from "./types";

function* handleFetch() {
	try {
		const snapshot = yield call(
			db.firestore.getCollection,
			firebase.firestore().collection("posts").orderBy("postId", "desc"),
		);
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
	yield call(db.firestore.setDocument, `posts/${post.postId}`, {
		...post,
	});
}
function* deletePost(postId) {
	yield call(db.firestore.deleteDocument, `posts/${postId}`);
}

function* watchFetchRequest() {
	yield takeEvery(Posts.FETCH_REQUEST, handleFetch);
}
function* watchDeletePost() {
	while (true) {
		const { postId } = yield take(Posts.DELETE_POST);
		yield fork(deletePost, postId);
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
