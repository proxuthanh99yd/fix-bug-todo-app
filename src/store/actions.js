import { GET_TODOS_LIST, SET_TODO_INPUT, ADD_TODO_ITEM, DELETE_TODO_ITEM, TOGGLE_TODO_ITEM } from "./actionType";


export const getTodosList = (data) => {
    return {
        type: GET_TODOS_LIST,
        payload: data,
    }
};

export const setTodoInput = (inputValue) => {
    return {
        type: SET_TODO_INPUT,
        payload: inputValue,
    }
}

export const addTodoItem = (inputValue) => {
    return {
        type: ADD_TODO_ITEM,
        payload: inputValue,
    }
}

export const deleteTodoItem = (id) => {
    return {
        type: DELETE_TODO_ITEM,
        payload: id,
    }
}

export const toggleTodoItem = (id) => {
    return {
        type: TOGGLE_TODO_ITEM,
        payload: id
    }
}