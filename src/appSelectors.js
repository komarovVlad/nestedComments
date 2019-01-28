import {createSelector} from 'reselect';

function findNestedCommentById(comments = [], id){
    let nestedComment;
    for(let i = 0, len = comments.length; i < len; i++){
        const currentComment = comments[i];
        if(currentComment.id === id){
            nestedComment = currentComment;
            break;
        }
        if(currentComment.hasOwnProperty('childrenComments')) {
            const result = findNestedCommentById(currentComment.childrenComments, id);
            if(result !== undefined){
                nestedComment = result;
                break;
            }
        }
    }
    return nestedComment;
}

const getComments = state => state.commentsReducer.comments;

export const getComputedComments = createSelector(
    getComments,
    existingComments => {
        const comments = JSON.parse(JSON.stringify(existingComments));
        let i = 0;
        for( ; i < comments.length; i++) {
            const currentComment = comments[i];
            if(currentComment.hasOwnProperty('responseTo')){
                const parent = findNestedCommentById(comments, currentComment.responseTo);
                if(!parent.hasOwnProperty('childrenComments')){
                    parent.childrenComments = [];
                }
                parent.childrenComments.push(currentComment);
                comments.splice(i, 1);
                i--;
            }
        }
        return comments;
    }
);