import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import { TodoCard } from "./TodoCard";
import { addTodo, requestTodos, toggleTodo } from '../../data/actions/todo_actions';

const renderTodoList = (toggleTodo, todoList) => {
    todoList.map(todo => (
      <Col xs="12" sm={{ span: 6}} md={{ span: 3, offset: 3 }}>
        <TodoCard toggleTodo={toggleTodo} todo={todo} />
      </Col>
    ))
}

const BaseTodoListPage = ({ todos, dispatchAddTodo, dispatchRequestTodos }) => {
    useEffect(() => {
        dispatchRequestTodos()
    }, [dispatchRequestTodos]);
    const todoList = todos.list
    return (
        <Container>
            <Row>
              {renderTodoList(toggleTodo, todoList)}
            </Row>
        </Container>
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
