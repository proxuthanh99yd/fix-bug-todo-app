import Todo from './components/Todo';
import TodosList from './components/TodosList';

function App() {

    return (
        <div className="app">
            <header>
                <h2>To Do List API Use Context & Reducer</h2>
                <Todo />
            </header>
            <TodosList
                />
        </div>
    )
}

export default App
