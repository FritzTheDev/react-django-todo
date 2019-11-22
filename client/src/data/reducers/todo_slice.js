import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    list: [],
    error: null
}

const todosList = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        getTodosSuccess(state, action) {
            state.list = action.payload.list
        },
        getTodosFailure(state, action) {
            state.error = action.payload
        }
    }
});

export const { getTodosSuccess, getTodosFailure } = todosList.actions;

export default todosList.reducer;


export const getTodoList = () => async dispatch => {
    try {
        const res = await fetch('http://localhost:8000/');
        const listData = await res.json();
        dispatch(getTodosSuccess(listData));
    } catch (err) {
        dispatch(getTodosFailure(err.toString()));
    }
}