import {compose} from 'redux';
import withStyles from 'react-jss';
import {connect} from 'react-redux';

import {mapDispatchToProps, mapStateToProps} from "./connect.js";
import styles from './styles';
import CommentList from './CommentsList';

const connected = connect(mapStateToProps, mapDispatchToProps);
const styled = withStyles(styles);

export default compose(
    connected,
    styled
)(CommentList);