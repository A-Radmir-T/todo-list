import { AppActions } from '../../types'
import { SEARCH_TASKS } from '../../consts'

export const setSearchPhrase = (searchPhrase: string): AppActions => {
	return {
		type: SEARCH_TASKS,
		searchPhrase,
	}
}
