import { useTodo } from "../store/TodoProvider";

function TodosList() {
    const { state, handleDelete, handleEdit, handleToggle } = useTodo();

    return (
        <ul>
            {state.todos.map((todo) => {
                const { id, content, completed } = todo;
                return (
                    <li key={id}>
                        <span
                            className={completed ? "checked" : ""}
                            onClick={() => handleToggle(id, completed)}
                        >
                            {content}
                        </span>
                        <span>
                            <i
                                className="fa-solid fa-pen-to-square"
                                onClick={() => handleEdit(id, content)}
                            ></i>
                            <i
                                className="fa-solid fa-trash"
                                onClick={() => handleDelete(id)}
                            ></i>
                        </span>
                    </li>
                );
            })}
        </ul>
    );
}

export default TodosList;
