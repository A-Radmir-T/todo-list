import { IState } from '../types'

export const selectIsEdit = (state: IState): boolean => {
	return state.appState.isEditTask
}
