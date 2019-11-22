import {
  ADD_TODO,
  DELETE_TODO,
  MARK_TODO_COMPLETED,
  MARK_TODO_NOT_COMPLETED
} from "../actions/todo_actions";

const initialState = [];

export function todos(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    // Adds TODO to end of array
    case ADD_TODO: 
      return [...state, { title: action.payload.title, body: action.payload.body, completed: false }];
    // Deletes TODO from specified index.
    case DELETE_TODO: 
      return state.filter((val, index) => index !== action.payload.index);
    // Marks TOOD as completed.
    case MARK_TODO_COMPLETED:
      return [
        ...state.slice(0, action.payload.index),
        { ...state[action.payload.index], completed: true },
        ...state.slice(action.payload.index + 1),
      ];
    // Marks TODO as not completed.
    case MARK_TODO_NOT_COMPLETED:
        return [
          ...state.slice(0, action.payload.index),
          { ...state[action.payload.index], completed: false },
          ...state.slice(action.payload.index + 1),
        ];
    default:
      return state;
  }
}