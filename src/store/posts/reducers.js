import { Posts } from "./types";

const initialState = {
	data: [],
	loading: false,
	error: undefined,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case Posts.FETCH_REQUEST: {
			return { ...state, loading: true };
		}
		case Posts.FETCH_SUCCESS: {
			return { ...state, loading: false, data: action.data };
		}
		case Posts.FETCH_ERROR: {
			return { ...state, loading: false, error: action.payload };
		}
		// case Posts.FETCH_POST: {
		// 	return { ...state, loading: true };
		// }
		case Posts.ADD_POST: {
			return { ...state, loading: false, data: [action.post, ...state.data] };
		}
		default:
			return state;
	}
};

export { reducer as PostsReducer };
