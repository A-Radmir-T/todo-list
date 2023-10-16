import { AppActions, ITodosState } from '../types'
import {
	CREATE_TASK,
	DELETE_TASK,
	GET_TASK,
	INIT_STATE,
	RESET_STATE,
	SEARCH_TASKS,
	SORT_TASKS,
	UPDATE_TASK,
} from '../consts'

export const initialTodosState: ITodosState = {
	allTasks: [],
	selectedTask: {
		id: '',
		title: '',
	},
	isSorted: false,
	searchPhrase: '',
}

export const todosReducer = (
	state = initialTodosState,
	action: AppActions,
): ITodosState => {
	switch (action.type) {
		case INIT_STATE:
			return {
				...state,
				allTasks: action.tasks,
			}
		case CREATE_TASK:
			return {
				...state,
				allTasks: [...state.allTasks, action.task],
			}
		case GET_TASK:
		case UPDATE_TASK:
			return {
				...state,
				selectedTask: action.task,
			}
		case RESET_STATE:
			return {
				...initialTodosState,
			}

		case DELETE_TASK:
			return {
				...state,
			}

		case SORT_TASKS:
			return {
				...state,
				isSorted: !state.isSorted,
				allTasks: action.sortedTasks,
			}
		case SEARCH_TASKS:
			return {
				...state,
				searchPhrase: action.searchPhrase,
			}

		default:
			return state
	}
}
