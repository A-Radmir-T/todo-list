import { ThunkActions } from '../../types'
import { SORT_TASKS } from '../../consts'
import { todosService } from '../../../shared/services/todos.service'
import { toggleLoading } from '../app-actions'

export const sortTasks = (): ThunkActions => {
	return async (dispatch, getState) => {
		const isAlphabetSorting = !getState().todos.isSorted
		dispatch(toggleLoading(true))
		const tasks = await todosService.getAllTasks({
			isAlphabetSorting,
			searchPhrase: '',
		})
		dispatch({
			type: SORT_TASKS,
			sortedTasks: tasks,
		})
		dispatch(toggleLoading(false))
	}
}
