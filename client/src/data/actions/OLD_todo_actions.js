//  Redux Constants
export const ADD_TODO = 'ADD_TODO';
export const MARK_TODO_NOT_COMPLETED = 'MARK_TODO_NOT_COMPLETED';
export const MARK_TODO_COMPLETED = 'MARK_TODO_COMPLETED';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(title, body) {
    return { type: ADD_TODO, payload: { title, body } }
}

export function markTodoNotCompleted(index) {
    return { type: MARK_TODO_NOT_COMPLETED, payload: { index } }
}

export function markTodoCompleted(index) {
    return { type: MARK_TODO_COMPLETED, payload: { index } }
}

export function deleteTodo(index) {
    return { type: DELETE_TODO, payload: { index } }
}