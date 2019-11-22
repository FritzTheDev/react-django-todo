export const REQUEST_TODOS_ATTEMPT = 'REQUEST_TODOS_ATTEMPT';
export const REQUEST_TODOS_SUCCESS = 'REQUEST_TODOS_SUCCESS';
export const REQUEST_TODOS_FAILURE = 'REQUEST_TODOS_FAILURE';
export const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS';
export const TOGGLE_TODO_FAILURE = 'TOGGLE_TODO_FAILURE';
export const ADD_TODO_ATTEMPT = 'ADD_TODO_ATTEMPT';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const requestTodos = () => (dispatch) => {
    dispatch({ type: REQUEST_TODOS_ATTEMPT });
    fetch(`${process.env.SERVER_ROOT_URL}/todos`)
        .then(data => dispatch({ type: REQUEST_TODOS_SUCCESS, payload: { todos: data } }))
        .catch(error => dispatch({ type: REQUEST_TODOS_FAILURE, error }));
}

export const addTodo = () => (dispatch) => {
    dispatch({ type: ADD_TODO_ATTEMPT })
    fetch(`${process.env.SERVER_ROOT_URL}/todos`, { method: 'POST' })
        .then(data => dispatch({ type: ADD_TODO_SUCCESS, payload: { todo: data } }))
        .catch(error => dispatch({ type: ADD_TODO_FAILURE, error }));
}

export const toggleTodo = (id) => (dispatch, getState) => {
    fetch(`${process.env.SERVER_ROOT_URL}/todos/${id}`, { method: 'PATCH'})
        .then(data => dispatch({ type: TOGGLE_TODO_SUCCESS, payload: { todo: data } }))
        .catch(error => dispatch({ type: TOGGLE_TODO_FAILURE, payload: { todo: error } }));
}