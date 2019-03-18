import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducerAuthorization from './reducers/authorization';
import taskReducer from './reducers/tasks';

export default combineReducers({
  form: formReducer,
  tasks: taskReducer,
  admin: reducerAuthorization,
});
