import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = state => state;

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

export default store;
