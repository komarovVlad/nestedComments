import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentsList from './containers/CommentsList';
import * as actions from "./services/comments/actions";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {getComputedComments} from './appSelectors';

class App extends Component {
  componentDidMount() {
      this.props.fetchCommentsAction();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
            <CommentsList comments={this.props.comments} />
        </header>
      </div>
    );
  }
}
export const mapStateToProps = state => ({
    comments: getComputedComments(state)
});


export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
