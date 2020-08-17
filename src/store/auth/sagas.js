import firebase from "firebase";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import db from "../../firebase";
import { AuthError, AuthSuccess } from "./actions";
import { Auth } from "./types";

const authProvider = new firebase.auth.GoogleAuthProvider();
function* handleAuth() {
  try {
    const data = yield call(db.auth.signInWithPopup, authProvider);
    yield put(AuthSuccess(data));
  } catch (error) {
    yield put(AuthError(error));
  }
}
function* watchFetchRequest() {
  yield takeEvery(Auth.AUTH_REQUEST, handleAuth);
}
function* AuthSaga() {
  yield all([fork(watchFetchRequest)]);
}

export default AuthSaga;
