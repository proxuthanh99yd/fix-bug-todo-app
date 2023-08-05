import { useContext, useEffect } from "react";
import TodoContext from "../store/TodoContext";
import {
    deleteTodoItem,
    getTodosList,
    setTodoInput,
    toggleTodoItem,
} from "../store/actions";

function TodosList() {
    const [{ todoInput, todos, isEdit }, dispatch] = useContext(TodoContext);

    useEffect(() => {
        fetch("http://localhost:3333/todos")
            .then((res) => {
                if (!res.ok) return res.statusText;
                return res.json();
            })
            .then((data) => dispatch(getTodosList(data)))
            .catch((err) => console.log(err));
    }, []);

    const handleEdit = (id, content) => {
        dispatch(setTodoInput({ id, content }));
        // Làm sao để truyền id cho bên thằng reducer ???
    };

    const handleDelete = (id) => {
        dispatch(deleteTodoItem(id));
    };

    const handleToggle = (id) => {
        dispatch(toggleTodoItem(id));
    };

    return (
        <ul>
            {todos.map((todo) => {
                const { id, content, completed } = todo;
                return (
                    <li key={id}>
                        <span
                            className={completed ? "checked" : ""}
                            onClick={() => handleToggle(id)}
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
