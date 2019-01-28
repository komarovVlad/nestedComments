import {compose} from 'redux';
import withStyles from 'react-jss';
import {connect} from 'react-redux';

import {mapStateToProps, mapDispatchToProps} from '../CommentForm/connect';
import styles from './styles';
import Comment from './CommentForm';

const styled = withStyles(styles);
const connected = connect(mapStateToProps, mapDispatchToProps);

export default compose(connected, styled)(Comment);