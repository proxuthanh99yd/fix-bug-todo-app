import { createContext, useReducer } from "react";
import { initialState , reducer } from '../store/reducer'

const TodoContext = createContext();

function TodoProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TodoContext.Provider value={ [state, dispatch] }>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext;
export { TodoProvider };
