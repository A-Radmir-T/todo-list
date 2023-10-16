import { AppActions } from '../../types'
import { TOGGLE_LOADING } from '../../consts'

export const toggleLoading = (isLoading: boolean): AppActions => {
	return {
		type: TOGGLE_LOADING,
		isLoading,
	}
}
