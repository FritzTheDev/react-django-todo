import { ADD_TODO_SUCCESS, ADD_TODO_FAILURE, REQUEST_TODOS_SUCCESS, REQUEST_TODOS_FAILURE, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_FAILURE } from "../actions/todo_actions";

const initialState = { list: [], error: null };

export function todos = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_TODOS_SUCCESS:
      return { list: action.payload.todos, error: null }
    case REQUEST_TODOS_FAILURE:
      return { list: [], error: action.payload.error }
    case ADD_TODO_SUCCESS:
      return { list: [...state.todos, action.payload.todo], error: null };
    case ADD_TODO_FAILURE:
      return { list: state.todos, error: action.payload.error }
    case TOGGLE_TODO_SUCCESS:
      return { list: [
          ...state.slice(0, action.payload.index),
          { ...state.list[action.payload.index], completed: true },
          ...state.slice(action.payload.index +1)
        ], error: null }
    case TOGGLE_TODO_FAILURE:
      return { list: state.list, error: action.payload.error }
  }
}
