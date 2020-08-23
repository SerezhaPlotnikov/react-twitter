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
      return { ...state, loading: false, error: action.error };
    }
    case Posts.ADD_POST: {
      return { ...state, loading: false, data: [action.post, ...state.data] };
    }
    case Posts.DELETE_POST: {
      return {
        ...state,
        loading: false,
        data: state.data.filter((post) => post.postId !== action.postId),
      };
    }
    default:
      return state;
  }
};

export { reducer as PostsReducer };
