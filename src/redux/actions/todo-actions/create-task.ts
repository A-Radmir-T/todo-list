import { ThunkActions } from '../../types'
import { todosService } from '../../../shared/services/todos.service'
import { CREATE_TASK } from '../../consts'
import { ITask } from '../../../shared/interfaces'

export const createTask = (newTask: ITask): ThunkActions => {
	return async (dispatch) => {
		const task = await todosService.createTask(newTask)
		dispatch({
			type: CREATE_TASK,
			task,
		})
	}
}
