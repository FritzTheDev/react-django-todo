import {
  ADD_TODO,
  DELETE_TODO,
  MARK_TODO_COMPLETED,
  MARK_TODO_NOT_COMPLETED
} from "../actions/todo_actions";
import { combineReducers } from "../../../../../../../Library/Caches/typescript/3.6/node_modules/redux";

const initialState = [];

function todos(state = initialState, action) {
  switch (action.type) {
    // Adds TODO to end of array
    case ADD_TODO: 
      return [...state, { title: action.title, body: action.body, completed: false }];
    // Deletes TODO from specified index.
    case DELETE_TODO: 
      return state.filter((val, index) => index !== action.payload.index);
    // Marks TOOD as completed.
    case MARK_TODO_COMPLETED:
      return [
        ...state.slice(0, action.payload.index),
        { ...state[action.payload.index], completed: true },
        ...state.slice(index + 1);
      ];
    
    case MARK_TODO_NOT_COMPLETED:
        return [
          ...state.slice(0, action.payload.index),
          { ...state[action.payload.index], completed: false },
          ...state.slice(index + 1);
        ];
    default:
      return state;
  }
}

export const rootReducer = combineReducers({ todos });