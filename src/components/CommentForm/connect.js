import {bindActionCreators} from 'redux';
import {commentsInputChange} from '../../services/comments/actions';

export const mapStateToProps = null;
export const mapDispatchToProps = dispatch => bindActionCreators({commentsInputChange}, dispatch);