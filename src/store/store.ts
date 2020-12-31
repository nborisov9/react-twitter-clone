import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { TweetsState } from './ducks/tweets/contracts/state';
import { rootReducer } from './rootReducer';
import { rootSaga } from './sagas';

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  tweets: TweetsState;
}

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);
