import { ToggleEditType } from '../../types'
import { TOGGLE_EDIT } from '../../consts'

export const toggleEditTask = (isEdit: boolean): ToggleEditType => {
	return {
		type: TOGGLE_EDIT,
		isEdit,
	}
}
