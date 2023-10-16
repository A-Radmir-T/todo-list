import { IState } from '../types'
import { ITask } from '../../shared/interfaces'

export const selectAllTasks = (state: IState): ITask[] => {
	return state.todos.allTasks
}
