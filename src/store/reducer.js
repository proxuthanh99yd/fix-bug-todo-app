import {
	ADD_TODO_ITEM,
	DELETE_TODO_ITEM,
	GET_TODOS_LIST,
	SET_TODO_INPUT,
	TOGGLE_TODO_ITEM,
} from "./actionType";

export const initialState = {
	todos: [],
	todoInput: "",
	isEdit: false,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case GET_TODOS_LIST:
			return {
				...state,
				todos: [...action.payload],
			};

		case SET_TODO_INPUT:
			if (action.payload.id) {
				return {
					...state,
					isEdit: action.payload.id,
					todoInput: action.payload.content,
				};
			}
			return {
				...state,
				todoInput: action.payload,
			};

		case ADD_TODO_ITEM:
			if (state.isEdit === false) {

				return {
					...state,
					todos: [
						...state.todos,
						{
							id: Date.now(),
							content: action.payload,
							completed: false,
						},
					],
				};
			} else {
				console.log(state.isEdit, state.todoInput);

				// Tại đây có cách nào lấy ID khi handleEdit ko nhỉ ? 
				// c đang tắc đoạn này :(((
				// hay phải tạo  1 Modal rồi đẩy thằng tođoEit lên xong mình update ???
			}
			return { ...state, isEdit: false }

		case DELETE_TODO_ITEM: {
			const newTodos = state.todos.filter(
				(item) => item.id !== action.payload
			);
			return {
				...state,
				todos: newTodos,
			};
		}
		case TOGGLE_TODO_ITEM:
			return {
				...state,
				todos: [
					...state.todos.map((item) =>
						item.id === action.payload
							? { ...item, completed: !item.completed }
							: item
					),
				],
			};

		default:
			return state;
	}
};
