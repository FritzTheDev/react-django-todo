import React from 'react';
import { connect } from "react-redux";

import { addTodo, markTodoCompleted, markTodoNotCompleted, deleteTodo } from '../data/actions/todo_actions';

const TodoListPage = (props) => {
    console.log(props);
    return (<div />);
}

connect(
    (state) => ({
        todos: state.todos
    }),
    (dispatch) => ({
        addTodo: (title, body) => addTodo(title, body),
        markTodoCompleted: (index) => markTodoCompleted(index),
        markTodoNotCompleted: (index) => markTodoNotCompleted(index),
        deleteTodo: (index) => deleteTodo(index)
    })
)(TodoListPage);
