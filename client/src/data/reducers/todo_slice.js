import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    list: [];
}

const todosList = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        getTodosSuccess(state, action) {
            state.list = action.payload.list;
        }
    }
});

export const { getTodosSuccess } = todosList.actions;

export const todosList.reducer;
