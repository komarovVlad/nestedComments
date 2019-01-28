import * as actionTypes from './actionTypes';

const initialState = {
    comments: [],
    error: false,
    loading: false,
    postLoading: false,
    postError: false
};

export default function(state = initialState, action){
    switch(action.type){
        case actionTypes.COMMENTS_FETCH: {
          return ({
              ...state,
              loading: true
          })
        }
        case actionTypes.COMMENTS_FETCH_SUCCESS: {
            const {payload} = action;
            return ({
                ...state,
                comments: payload,
                loading: false
            })
        }
        case actionTypes.COMMENTS_FETCH_FAIL: {
            return ({
                ...state,
                error: true,
                loading: false
            })
        }
        case actionTypes.COMMENTS_ERROR_RESET: {
            return ({
                ...state,
                error: false,
                postError: false
            })
        }
        case actionTypes.COMMENTS_CREATE: {
            return ({
                ...state,
                postLoading: true
            })
        }
        case actionTypes.COMMENTS_CREATE_SUCCESS: {
            return ({
                ...state,
                postLoading: false,
                comments: state.comments.concat(action.payload)
            })
        }
        case actionTypes.COMMENTS_CREATE_FAIL: {
            return ({
                ...state,
                postLoading: false,
                postError: true,
            })
        }
        default:
            return state;
    }
}