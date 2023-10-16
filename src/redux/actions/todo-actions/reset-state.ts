import { AppActions } from '../../types'
import { RESET_STATE } from '../../consts'

export const resetState = (): AppActions => {
	return {
		type: RESET_STATE,
	}
}
