import {combineReducers} from 'redux';
import {ADD_TODO, TOGGLE_TODO} from '../actions/actions';

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (action.index === todo.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            });
        default:
            return state;
    }
}

const todoApp = combineReducers({
    todos,
});

export default todoApp;