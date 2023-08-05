import { useContext, useRef } from "react";
import TodoContext from "../store/TodoContext";
import { addTodoItem, setTodoInput } from "../store/actions";

function Todo() {
    const [{ todoInput }, dispatch] = useContext(TodoContext);
    const inputRef = useRef();

    const handleInput = (e) => {
        dispatch(setTodoInput(e.target.value));
    };

    const handleAddTodo = () => {
        if (!todoInput) return;
        dispatch(addTodoItem(todoInput));
        dispatch(setTodoInput(""));
        inputRef.current.focus();
    };

    return (
        <>
            <input
                type="text"
                placeholder="Title..."
                value={todoInput}
                onChange={handleInput}
                ref={inputRef}
            />
            <button className="addBtn" onClick={handleAddTodo}>
                Add
            </button>
        </>
    );
}

export default Todo;
