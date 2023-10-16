import { AppActions, IAppState } from '../types'
import { TOGGLE_CREATE, TOGGLE_DELETE, TOGGLE_EDIT, TOGGLE_LOADING } from '../consts'

const initialAppState: IAppState = {
	isLoading: false,
	isEditTask: false,
	isDeleteTask: false,
	isCreateTask: false,
}

export const appReducer = (state = initialAppState, action: AppActions): IAppState => {
	switch (action.type) {
		case TOGGLE_LOADING:
			return {
				...state,
				isLoading: action.isLoading,
			}
		case TOGGLE_CREATE:
			return {
				...state,
				isCreateTask: action.isCreate,
			}
		case TOGGLE_EDIT:
			return {
				...state,
				isEditTask: action.isEdit,
			}
		case TOGGLE_DELETE:
			return {
				...state,
				isDeleteTask: action.isDelete,
			}

		default:
			return state
	}
}
