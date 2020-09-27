import { all, call, fork, put, take, takeEvery } from "redux-saga/effects";
import { FIREBASE_POSTS } from "../../api/api";
import { fetchError, fetchSuccess } from "./actions";
import { Posts } from "./types";

function* handleFetch() {
  try {
    const posts = yield call(FIREBASE_POSTS.CallPosts);
    if (posts.length !== 0) {
      yield put(fetchSuccess(posts));
    } else {
      yield put(fetchError("error"));
    }
  } catch (err) {
    yield put(fetchError(err));
  }
}
function* addPost(post) {
  yield call(FIREBASE_POSTS.AddPost, post);
}
function* deletePost(postId) {
  yield call(FIREBASE_POSTS.DeletePost, postId);
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
