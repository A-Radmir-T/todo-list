import { ToggleCreateType } from '../../types'
import { TOGGLE_CREATE } from '../../consts'

export const toggleCreateTask = (isCreate: boolean): ToggleCreateType => {
	return {
		type: TOGGLE_CREATE,
		isCreate,
	}
}
