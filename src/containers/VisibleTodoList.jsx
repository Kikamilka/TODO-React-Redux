import {connect} from 'react-redux';
import {toggleTodo, deleteTodo} from '../actions/actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'all':
            return todos;
        case 'completed':
            return todos.filter(t => t.completed);
        case 'active':
            return todos.filter(t => !t.completed);
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            ownProps.filter
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        },
        onDelete: (id) => {
            dispatch(deleteTodo(id))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;