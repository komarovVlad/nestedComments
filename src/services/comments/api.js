import createRequest from '../../utils/createApiRequest';

export function fetchComments() {
    return createRequest('comments', {method: 'get'});
}

export function postComment(data) {
    return createRequest('comments', {
        method: 'post',
        data
    });
}