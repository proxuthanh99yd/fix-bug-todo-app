import {
	CREATE_TODO_ITEM,
	DELETE_TODO_ITEM,
	GET_TODO_LIST,
	SET_TODO_INPUT,
	TOGGLE_TODO_ITEM,
	UPDATE_TODO_ITEM,
} from "./actions";

export const initialState = {
	todos: [],
	todoInput: "",
	isEdit: false,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case GET_TODO_LIST:
			return {
				...state,
				todos: [...action.payload],
			};

		case SET_TODO_INPUT: {
			if (action.payload.id) {
				return {
					...state,
					isEdit: {
						id: action.payload.id
					},
					todoInput: action.payload.content,
				};
			}
			return {
				...state,
				todoInput: action.payload,
			};
		}

		case CREATE_TODO_ITEM: {
			return {
				...state,
				todos: [
					...state.todos,
					action.payload.data,
				],
				todoInput: ""
			};
		}

		case UPDATE_TODO_ITEM: {
			console.log(action);
			return {
				...state,
				isEdit: false,
				todos: [...state.todos.map(todo => {
					if (todo.id === action.payload.id) {
						return { ...todo, content: action.payload.content }
					}
					return todo
				})],
				todoInput: ""
			}
		}

		case DELETE_TODO_ITEM: {
			const newTodos = state.todos.filter(
				(item) => item.id !== action.payload
			);
			return {
				...state,
				todos: newTodos,
			};
		}

		case TOGGLE_TODO_ITEM: {
			return {
				...state,
				todos: [
					...state.todos.map((item) =>
						item.id === action.payload.id
							? { ...item, completed: action.payload.completed }
							: item
					),
				],
			};
		}

		default:
			return state;
	}
};
