import React from "react";
import { Card, Button } from "react-bootstrap";

export const TodoCard = ({ todo, toggleTodo }) => (
    <Card>
        <Card.Header className="bg-primary text-white">
            <Card.Title className="my-0 text-center">
                {todo.title}
            </Card.Title>
        </Card.Header>
        <Card.Body>
            <Card.Text>
                {todo.body}
            </Card.Text>
            {todo.completed &&
                <Button block onClick={() => toggleTodo(todo.id)}>Mark Not Completed</Button>
            }
            {!todo.completed &&
                <Button block onClick={() => toggleTodo(todo.id)}>Mark As Completed</Button>
            }
        </Card.Body>
    </Card>
)