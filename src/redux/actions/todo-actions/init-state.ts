import { todosService } from '../../../shared/services/todos.service'
import { INIT_STATE } from '../../consts'
import { ThunkActions } from '../../types'
import { toggleLoading } from '../app-actions'

export const initState = (): ThunkActions => {
	return async (dispatch, getState) => {
		dispatch(toggleLoading(true))
		const isSorted = getState().todos.isSorted
		const searchPhrase = getState().todos.searchPhrase
		const tasks = await todosService.getAllTasks({
			isAlphabetSorting: isSorted,
			searchPhrase,
		})
		dispatch({
			type: INIT_STATE,
			tasks,
		})
		dispatch(toggleLoading(false))
	}
}
