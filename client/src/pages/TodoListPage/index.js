import React from 'react';
import { connect } from "react-redux";

import { addTodo, markTodoCompleted, markTodoNotCompleted, deleteTodo } from '../../data/actions/todo_actions';

const BaseTodoListPage = (props) => {
    console.log(props);
    console.log(props.todos);
    return (<>
        <button onClick={() => addTodo('test title', 'best body')}></button>
        <h1>{props.todos[0] && props.todos[0].title}</h1>
    </>);
}

export const TodoListPage = connect(
    (state) => ({
        todos: state.todos
    }),
    (dispatch) => ({
        addTodo: (title, body) => dispatch(addTodo(title, body)),
        markTodoCompleted: (index) => dispatch(markTodoCompleted(index)),
        markTodoNotCompleted: (index) => dispatch(markTodoNotCompleted(index)),
        deleteTodo: (index) => dispatch(deleteTodo(index))
    })
)(BaseTodoListPage);
