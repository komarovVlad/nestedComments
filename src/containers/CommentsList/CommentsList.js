import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from '../../components/Comment';

export default class extends Component{
    static propTypes = {
        comments: PropTypes.arrayOf(PropTypes.object).isRequired,
        commentsLoading: PropTypes.bool,
        commentsError: PropTypes.bool,
        fetchCommentsAction: PropTypes.func,
        resetFetchCommentsError: PropTypes.func,
        postComment: PropTypes.func,
    };
    static defaultProps = {
        comments: [{}],
        commentsLoading: false,
        commentsError: false,
        fetchCommentsAction: () => undefined,
        resetFetchCommentsError: () => undefined
    };

    resetFetchError = () => this.props.resetFetchCommentsError();

    renderFetchError = () => {
        const errorClassname = this.props.classes.error;
        return <div className={errorClassname}>
            <p>Something goes wrong</p>
            <button onClick={this.resetFetchError}>Ok</button>
        </div>
    };

    renderComment = (comment) => {
        return <Comment
            key={comment.id}
            body={comment.body}
            author={comment.author}
            childrenComments={comment.childrenComments}
            commentId={comment.id}
            postComment={this.props.postComment}
        />;
    };

    render() {
        const {comments, commentsLoading, commentsError, classes} = this.props;
        if(commentsLoading){
            return <p>...Loading</p>;
        }
        if(commentsError){
            return this.renderFetchError();
        }
        return <div className={classes.container}>
            {comments.map(this.renderComment)}
        </div>

    }
}