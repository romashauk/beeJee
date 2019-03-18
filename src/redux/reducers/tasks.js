import {
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  RESOLVE_TASK,
} from '../actions/tasks';

const initialState = {
  loading: false,
  creating: false,
  editing: false,
  entries: [],
  total: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: action.tasks,
        total: action.total,
      };

    case GET_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case CREATE_TASK_REQUEST:
      return {
        ...state,
        creating: true,
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        creating: false,
      };
    case CREATE_TASK_FAILURE:
      return {
        ...state,
        creating: false,
      };
    case RESOLVE_TASK:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default reducer;
