import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentForm from '../CommentForm';
import CommentList from '../../containers/CommentsList';

export default class extends Component{
    static propTypes = {
        author: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        childrenComments: PropTypes.arrayOf(PropTypes.object),
        commentId: PropTypes.number,
        postComment: PropTypes.func,
    };
    static defaultProps = {
        author: '',
        body: ''
    };
    state = {
        isFormVisible: false,
    };

    toggleFormVisibility = () => this.setState({isFormVisible: !this.state.isFormVisible});

    addComment = commentText => {
        const comment = {
            body: commentText,
            author: this.props.author,
            responseTo: this.props.commentId
        };
        this.props.postComment(comment);
        this.toggleFormVisibility();
    };

    renderCommentForm = () => {
        if(!this.state.isFormVisible){
            return <button onClick={this.toggleFormVisibility}>Reply</button>;
        }
        return <CommentForm
            submitHandler={this.addComment}
            cancelHandler={this.toggleFormVisibility}
        />
    };

    renderChildren = () => {
        const {childrenComments} = this.props;
        if(Array.isArray(childrenComments) && childrenComments.length){
            return <CommentList comments={childrenComments}/>
        }
    };

    render() {
        const {classes, body, author} = this.props;
        return (
            <div className={classes.container}>
                <h6 className={classes.author}>{author}</h6>
                <span className={classes.text}>{body}</span>
                {this.renderCommentForm()}
                {this.renderChildren()}
            </div>
        )
    }
}