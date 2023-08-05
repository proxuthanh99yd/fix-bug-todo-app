import { useRef } from "react";
import { useTodo } from "../store/TodoProvider";

function Todo() {
    const { state, handleInput, handleCreate, handleUpdate } = useTodo();
    const inputRef = useRef();

    return (
        <>
            <input
                type="text"
                placeholder="Title..."
                value={state.todoInput}
                onChange={handleInput}
                ref={inputRef}
            />
            {state.isEdit === false ? (
                <button
                    className="addBtn"
                    onClick={() => handleCreate({ focus: inputRef.current })}
                >
                    Add
                </button>
            ) : (
                <button className="addBtn" onClick={() => handleUpdate()}>
                    Update
                </button>
            )}
        </>
    );
}

export default Todo;
