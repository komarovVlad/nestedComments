import {compose} from 'redux';
import withStyles from 'react-jss';

import styles from './styles';
import Comment from './Comment';

const styled = withStyles(styles);

export default compose(styled)(Comment);