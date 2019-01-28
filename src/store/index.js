import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import commentSaga from '../services/comments/sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const initialState = {};

export default createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
);

sagaMiddleware.run(commentSaga);