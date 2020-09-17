import { all, call, fork, put, take, takeEvery } from "redux-saga/effects";
import { FIREBASE_AUTH } from "../../api/api";
import { AuthError, AuthSuccess } from "./actions";
import { Auth } from "./types";

function* handleAuth() {
  try {
    const data = yield call(FIREBASE_AUTH.AuthGoogle);
    console.log(data.additionalUserInfo.profile);
    yield put(AuthSuccess(data.additionalUserInfo.profile));
  } catch (error) {
    yield put(AuthError(error));
  }
}

function* createUsers(payload) {
  try {
    const data = yield call(FIREBASE_AUTH.CreateUsers, payload);
    yield put(AuthSuccess(data));
  } catch (error) {
    yield put(AuthError(error));
  }
}

// function* signOutSaga() {
//   try {
//     const data = yield call(rsf.auth.signOut);
//     yield put(signOutSuccess(data));
//   }
//   catch(error) {
//     yield put(signOutFailure(error));
//   }
// }
function* watchFetchRequest() {
  yield takeEvery(Auth.AUTH_REQUEST, handleAuth);
}
function* watchAddUser() {
  while (true) {
    const { payload } = yield take(Auth.AUTH_CREATE);
    yield fork(createUsers, payload);
  }
}

function* AuthSaga() {
  yield all([fork(watchFetchRequest), fork(watchAddUser)]);
}

export default AuthSaga;
