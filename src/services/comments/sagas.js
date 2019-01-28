import { takeEvery, call, put, all, takeLatest, delay } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import { fetchComments, postComment } from './api';
import {fetchCommentsSuccess, fetchCommentsFail, postCommentSuccess, postCommentFail} from "./actions";

function* fetchCommentsWorker(){
    let response;
    try{
        response = yield call(fetchComments);
    }
    catch(err){
        yield put(fetchCommentsFail());
        console.log(err);
        return;
    }
    yield put(fetchCommentsSuccess(response.data));
}

function* postCommentWorker({payload}) {
    let response;
    try{
        response = yield call(postComment, payload);
    }
    catch(err){
        yield put(postCommentFail());
        console.log(err);
        return;
    }
    yield put(postCommentSuccess(response.data));
}

function* inputChange({payload}){
    yield delay(1500)
    yield console.log(payload);
}

function* watchCommentsFetch() {
    yield takeEvery(actionTypes.COMMENTS_FETCH, fetchCommentsWorker);
}

function* watchCommentPost() {
    yield takeEvery(actionTypes.COMMENTS_CREATE, postCommentWorker);
}

function* watchCommentsChange() {
    yield takeLatest(actionTypes.COMMENTS_INPUT_CHANGE, inputChange);
}


export default function* (){
    yield all([
        watchCommentsFetch(),
        watchCommentPost(),
        watchCommentsChange()
    ]);
}