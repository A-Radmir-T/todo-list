import { IState } from '../types'

export const selectIsSorted = (state: IState) => {
	return state.todos.isSorted
}
