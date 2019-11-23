export const REQUEST_TODOS_SUCCESS = 'REQUEST_TODOS_SUCCESS';
export const REQUEST_TODOS_FAILURE = 'REQUEST_TODOS_FAILURE';
export const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS';
export const TOGGLE_TODO_FAILURE = 'TOGGLE_TODO_FAILURE';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const requestTodos = () => (dispatch) => {
    fetch(`http://localhost:8000/todos/`)
        .then(res => res.json()
            .then(data => dispatch({ type: REQUEST_TODOS_SUCCESS, payload: { todos: data } }))
            .catch(error => dispatch({ type: REQUEST_TODOS_FAILURE, payload: { error: error() }})));
}

export const addTodo = (title, body) => (dispatch) => {
    fetch(`${process.env.SERVER_ROOT_URL}/todos/`, { method: 'POST', body: { title, body } })
        .then(data => dispatch({ type: ADD_TODO_SUCCESS, payload: { todo: data } }))
        .catch(error => dispatch({ type: ADD_TODO_FAILURE, payload: { error: error.toString() } }));
}

export const toggleTodo = (id) => (dispatch, getState) => {
    const list = getState()['todos']['list'];
    const todoIsCompleted = list.filter(val => val.id === id);
    console.log(todoIsCompleted);
    fetch(`http://localhost:8000/todos/${id}/`, { method: 'PATCH'}, { completed: !todoIsCompleted.id })
        .then(data => dispatch({ type: TOGGLE_TODO_SUCCESS, payload: { todo: data } }))
        .catch(error => dispatch({ type: TOGGLE_TODO_FAILURE, payload: { error: error.toString() } }));
}