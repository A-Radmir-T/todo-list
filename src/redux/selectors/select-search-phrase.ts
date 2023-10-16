import { IState } from '../types'

export const selectSearchPhrase = (state: IState): string => {
	return state.todos.searchPhrase
}
