export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text,
});

export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    index,
});

export const deleteTodo = (index) => ({
    type: DELETE_TODO,
    index,
});