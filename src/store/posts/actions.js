import { Posts } from "./types";

export const fetchRequest = () => ({ type: Posts.FETCH_REQUEST });
export const fetchSuccess = (data) => ({
	type: Posts.FETCH_SUCCESS,
	data,
});
export const fetchError = (error) => ({ type: Posts.FETCH_ERROR, error });
export const AddPost = (post) => ({ type: Posts.ADD_POST, post });
export const DeletePost = (postId) => ({
	type: Posts.DELETE_POST,
	postId,
});
