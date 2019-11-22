import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { addTodo, requestTodos } from '../../data/actions/todo_actions';

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
    }
}

export const TodoListPage = connect(mapStateToProps, mapDispatchToProps)(BaseTodoListPage);
