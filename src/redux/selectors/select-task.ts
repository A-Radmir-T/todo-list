import { IState } from '../types'
import { ITask } from '../../shared/interfaces'

export const selectTask = (state: IState): ITask => {
	return state.todos.selectedTask
}
