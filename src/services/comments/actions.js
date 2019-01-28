import * as actionTypes from './actionTypes';

export const fetchCommentsAction = () => ({
    type: actionTypes.COMMENTS_FETCH
});

export const resetFetchCommentsError = () => ({
    type: actionTypes.COMMENTS_ERROR_RESET
});

export const fetchCommentsSuccess = payload => ({
    type: actionTypes.COMMENTS_FETCH_SUCCESS,
    payload
});

export const fetchCommentsFail = () => ({
    type: actionTypes.COMMENTS_FETCH_FAIL
});

export const postComment = data => ({
    type: actionTypes.COMMENTS_CREATE,
    payload: data
});

export const postCommentSuccess = data => ({
    type: actionTypes.COMMENTS_CREATE_SUCCESS,
    payload: data
});

export const postCommentFail = () => ({
    type: actionTypes.COMMENTS_CREATE_FAIL,
});

export const commentsInputChange = data => ({
    type: actionTypes.COMMENTS_INPUT_CHANGE,
    payload: data
});