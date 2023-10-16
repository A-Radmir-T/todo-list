import { IState } from '../types'

export const selectIsDelete = (state: IState): boolean => {
	return state.appState.isDeleteTask
}
