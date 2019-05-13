import todo from '../ducks/todo';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  todo,
});

export default reducers;