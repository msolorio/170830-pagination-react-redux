import { createStore } from 'redux';
import { paginationReducer } from './reducers';

export default createStore(
  paginationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
