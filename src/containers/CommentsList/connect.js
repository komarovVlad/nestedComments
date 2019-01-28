import {bindActionCreators} from "redux";
import * as actions from '../../services/comments/actions';

export const mapStateToProps = state => ({
    commentsLoading: state.commentsReducer.loading,
    commentsError: state.commentsReducer.error
});

export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);