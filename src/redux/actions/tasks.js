import axios from 'axios';
import { reset } from 'redux-form';

/**
 * Action types
 */
export const GET_TASKS_REQUEST = 'GET_TASKS_REQUEST';
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const GET_TASKS_FAILURE = 'GET_TASKS_FAILURE';

export const CREATE_TASK_REQUEST = 'CREATE_TASK_REQUEST';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAILURE = 'CREATE_TASK_FAILURE';

export const RESOLVE_TASK = 'RESOLVE_TASK';

export function getTasks(sortField, sortDirection, page) {
  return dispatch => {
    dispatch({ type: GET_TASKS_REQUEST });

    const baseURL =
      'https://uxcandy.com/~shapoval/test-task-backend/?developer=Name';
    const query = `&sort_field=${sortField}&sort_direction=${sortDirection}&page=${page}`;

    return axios
      .get(`${baseURL}${query}`)
      .then(({ data }) =>
        dispatch({
          type: GET_TASKS_SUCCESS,
          tasks: data.message.tasks,
          total: parseInt(data.message.total_task_count, 10),
        })
      )
      .catch(() =>
        dispatch({
          type: GET_TASKS_FAILURE,
        })
      );
  };
}

export function createTask({ username, email, text }) {
  return dispatch => {
    dispatch({ type: CREATE_TASK_REQUEST });

    const url =
      'https://uxcandy.com/~shapoval/test-task-backend/create?developer=Name';
    const formData = new FormData();

    formData.set('username', username);
    formData.set('email', email);
    formData.set('text', text);

    return axios
      .post(url, formData)
      .then(({ data }) => {
        dispatch(reset('taskForm'));

        dispatch({
          type: CREATE_TASK_SUCCESS,
          task: data.message,
        });
      })
      .catch(() =>
        dispatch({
          type: CREATE_TASK_FAILURE,
        })
      );
  };
}

export function resolveTask(id) {
  return {
    type: RESOLVE_TASK,
    id,
  };
}
