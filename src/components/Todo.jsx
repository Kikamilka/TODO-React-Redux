import React from 'react';

/*class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li onClick={this.props.onClick}
                style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>
                {this.props.text}
            </li>
        );
    }
}*/

const Todo = ({onClick, completed, text}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
);


Todo.propTypes = {
    onClick: React.PropTypes.func.isRequired,
    completed: React.PropTypes.bool.isRequired,
    text: React.PropTypes.string.isRequired
};

export default Todo;