import { IState } from '../types'

export const selectIsLoading = (state: IState): boolean => {
	return state.appState.isLoading
}
