import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

import { addTodo, requestTodos, toggleTodo } from '../../data/actions/todo_actions';

const renderTodoList = (toggleTodo, )

const BaseTodoListPage = ({ todos, dispatchAddTodo, dispatchRequestTodos }) => {
    useEffect(() => {
        dispatchRequestTodos()
    }, [dispatchRequestTodos]);
    const todosList = todos.list
    return (
        <>
            <p>{todosList[0] && todosList[0].title}</p>
        </>
    );
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchAddTodo: (title, body) => dispatch(addTodo(title, body)),
        dispatchRequestTodos: () => dispatch(requestTodos()),
        dispatchToggleTodo: (id) => dispatch(toggleTodo(id))
    }
}

export const TodoListPage = connect(mapStateToProps, mapDispatchToProps)(BaseTodoListPage);
