import React from "react";
import { Card } from "react-bootstrap";

export const TodoCard = ({ todo, toggleTodo }) => (
    <Card>
        <Card.Header>
            <Card.Title>
                {todo.title}
            </Card.Title>
        </Card.Header>
        <Card.Body>
            <Card.Text>
                {todo.body}
            </Card.Text>
        </Card.Body>
    </Card>
)