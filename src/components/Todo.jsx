import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

const Todo = ({onClick, completed, text}) => (
    <ListGroupItem
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>
        {text}
    </ListGroupItem>
);


Todo.propTypes = {
    onClick: React.PropTypes.func.isRequired,
    completed: React.PropTypes.bool.isRequired,
    text: React.PropTypes.string.isRequired
};

export default Todo;