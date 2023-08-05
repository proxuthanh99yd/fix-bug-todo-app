import { useEffect } from "react";
import Todo from "./components/Todo";
import TodosList from "./components/TodosList";

import { getTodo } from "./callApi";
import { useTodo } from "./store/TodoProvider";

function App() {
    const { getTodoItem } = useTodo();
    useEffect(() => {
        getTodo()
            .then((data) => getTodoItem(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="app">
            <header>
                <h2>To Do List API Use Context & Reducer</h2>
                <Todo />
            </header>
            <TodosList />
        </div>
    );
}

export default App;
