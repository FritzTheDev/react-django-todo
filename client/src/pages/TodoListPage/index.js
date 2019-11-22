import React from 'react';
import { connect } from "react-redux";

import { addTodo, markTodoCompleted, markTodoNotCompleted, deleteTodo } from '../../data/actions/todo_actions';

const BaseTodoListPage = (props) => {
    console.log(props.todos);
    return (
        <>
            <button onClick={() => props.dispatchAddTodo('test title', 'best body')}>Add Todo</button>
            <button onClick={() => props.dispatchDeleteTodo(0)}>Remove First Todo</button>
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
        dispatchMarkTodoCompleted: (index) => dispatch(markTodoCompleted(index)),
        dispatchMarkTodoNotCompleted: (index) => dispatch(markTodoNotCompleted(index)),
        dispatchDeleteTodo: (index) => dispatch(deleteTodo(index)),
    }
}

export const TodoListPage = connect(mapStateToProps, mapDispatchToProps)(BaseTodoListPage);
