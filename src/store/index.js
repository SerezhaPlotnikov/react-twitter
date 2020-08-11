import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
// import { reducer as formReducer } from 'redux-form';
import {PostsReducer} from './posts/reducers'
// import { mainReducer } from './main/reducers';
import mainSaga from './main/sagas';

export const createRootReducer = () =>
	combineReducers({
		posts: PostsReducer,
		// form: formReducer,
	});

export function* rootSaga() {
	yield all([fork(mainSaga)]);
}
