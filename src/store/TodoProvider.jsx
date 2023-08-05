import PropTypes from "prop-types";
import {
    CREATE_TODO_ITEM,
    DELETE_TODO_ITEM,
    GET_TODO_LIST,
    SET_TODO_INPUT,
    TOGGLE_TODO_ITEM,
    UPDATE_TODO_ITEM,
} from "./actions";
import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { createTodo, deleteTodo, editTodo } from "../callApi";

const TodoContext = createContext();

function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getTodoItem = (data) => {
        dispatch({ type: GET_TODO_LIST, payload: data });
    };

    const handleInput = (e) => {
        dispatch({
            type: SET_TODO_INPUT,
            payload: e.target.value,
        });
    };
    const handleCreate = ({ focus }) => {
        if (!state.todoInput) return;
        createTodo({
            id: Date.now(),
            content: state.todoInput,
            completed: false,
        }).then((res) => {
            dispatch({
                type: CREATE_TODO_ITEM,
                payload: {
                    data: res,
                },
            });
        });
        focus.focus();
    };
    const handleEdit = (id, content) => {
        dispatch({ type: SET_TODO_INPUT, payload: { id, content } });
        // Làm sao để truyền id cho bên thằng reducer ???
    };
    const handleUpdate = () => {
        editTodo(state.isEdit.id, { content: state.todoInput }).then((res) => {
            dispatch({ type: UPDATE_TODO_ITEM, payload: res });
        });
    };
    const handleDelete = (id) => {
        deleteTodo(id);
        dispatch({ type: DELETE_TODO_ITEM, payload: id });
    };

    const handleToggle = (id, completed) => {
        editTodo(id, { completed: !completed }).then((res) => {
            dispatch({ type: TOGGLE_TODO_ITEM, payload: res });
        });
    };

    return (
        <TodoContext.Provider
            value={{
                state,
                handleUpdate,
                handleCreate,
                handleInput,
                getTodoItem,
                handleEdit,
                handleDelete,
                handleToggle,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

TodoProvider.propTypes = {
    children: PropTypes.node,
};

export default TodoContext;

function useTodo() {
    const context = useContext(TodoContext);
    return context;
}

export { TodoProvider, useTodo };
