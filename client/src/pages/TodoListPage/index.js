import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import { TodoCard } from "./TodoCard";
import { addTodo, requestTodos, toggleTodo } from '../../data/actions/todo_actions';

const renderTodoList = (toggleTodo, todoList) => {
    return todoList.map(todo => (
      <Col key={todo.id} xs="12" sm={{ span: 6 }} md={{ span: 4 }} className="my-2 my-md-3">
        <TodoCard toggleTodo={toggleTodo} todo={todo} />
      </Col>
    ))
}

const BaseTodoListPage = ({ todos, dispatchAddTodo, dispatchRequestTodos, dispatchToggleTodo }) => {
    useEffect(() => {
        dispatchRequestTodos()
    }, [dispatchRequestTodos]);
    console.log(todos.list)
    return (
        <Container fluid>
            <Row>
              {todos.list[0] && renderTodoList(dispatchToggleTodo, todos.list)}
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
