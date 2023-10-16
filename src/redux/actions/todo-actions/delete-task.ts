import { ThunkActions } from '../../types'
import { todosService } from '../../../shared/services/todos.service'
import { DELETE_TASK } from '../../consts'

export const deleteTask = (id: string): ThunkActions => {
	return async (dispatch) => {
		await todosService.deleteTask(id)
		dispatch({
			type: DELETE_TASK,
		})
	}
}
