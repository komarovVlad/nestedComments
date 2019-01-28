import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class extends Component{
    static propTypes = {
        submitHandler: PropTypes.func.isRequired,
        cancelHandler: PropTypes.func.isRequired,
        commentsInputChange: PropTypes.func,
    };
    static defaultProps ={
        submitHandler: () => undefined,
        cancelHandler: () => undefined
    };
    state = {
        comment: ''
    };
    inputChangeHandler = event => {
        this.setState({comment: event.target.value});
        this.props.commentsInputChange(event.target.value);
    };
    onSubmit = event => {
        event.preventDefault();
        const {submitHandler} = this.props;
        submitHandler(this.state.comment);
    };
    render() {
        const {cancelHandler} = this.props;
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" onChange={this.inputChangeHandler} placeholder='Type your comment...'/>
                <button type="submit">Add comment</button>
                <button onClick={cancelHandler}>Cancel</button>
            </form>
        )
    }
}