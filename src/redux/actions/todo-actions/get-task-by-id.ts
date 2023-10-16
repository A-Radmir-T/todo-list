import { ThunkActions } from '../../types'
import { todosService } from '../../../shared/services/todos.service'
import { GET_TASK } from '../../consts'
import { toggleLoading } from '../app-actions'

export const getTaskById = (id: string): ThunkActions => {
	return async (dispatch) => {
		dispatch(toggleLoading(true))
		const task = await todosService.getTaskById(id)
		dispatch({
			type: GET_TASK,
			task,
		})
		dispatch(toggleLoading(false))
	}
}
