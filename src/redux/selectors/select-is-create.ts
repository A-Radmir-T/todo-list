import { IState } from '../types'

export const selectIsCreate = (state: IState): boolean => {
	return state.appState.isCreateTask
}
