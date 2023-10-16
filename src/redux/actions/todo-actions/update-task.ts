import { ITask } from '../../../shared/interfaces'
import { ThunkActions } from '../../types'
import { todosService } from '../../../shared/services/todos.service'
import { UPDATE_TASK } from '../../consts'

export const updateTask = (task: ITask): ThunkActions => {
	return async (dispatch) => {
		const updatedTask = await todosService.editTask(task)
		dispatch({
			type: UPDATE_TASK,
			task: updatedTask,
		})
	}
}
