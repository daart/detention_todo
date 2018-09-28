import { combineReducers, createStore } from 'redux';

import { todos } from './todos';
import { visibilityFilter } from "./visibilityFilter";

const reducer = combineReducers({
  todos,
  visibilityFilter,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
