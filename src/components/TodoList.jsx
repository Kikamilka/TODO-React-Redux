import React, {PropTypes} from 'react'
import Todo from './Todo'
import {Button, Grid, Col, ListGroup} from 'react-bootstrap';

const TodoList = ({todos, onTodoClick, onDelete}) => (
    <ListGroup>
        {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <br />
                        <Grid>
                            <Col xs={1} md={1}>
                                <Button
                                    bsStyle="primary"
                                    onClick={() => onDelete(todo.id)}>
                                    Delete
                                </Button>
                            </Col>
                            <Col xs={6} md={6}>
                                <Todo
                                    {...todo}
                                    onClick={() => onTodoClick(todo.id)}
                                />
                            </Col>
                        </Grid>
                    </div>
                );
            }
        )}
    </ListGroup>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
