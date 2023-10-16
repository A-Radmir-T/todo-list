import { ToggleDeleteType } from '../../types'
import { TOGGLE_DELETE } from '../../consts'

export const toggleDelete = (isDelete: boolean): ToggleDeleteType => {
	return {
		type: TOGGLE_DELETE,
		isDelete,
	}
}
