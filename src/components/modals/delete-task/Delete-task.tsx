import { Modal } from '../modal/Modal'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions, IState } from '../../../redux/types'
import { deleteTask } from '../../../redux/actions/todo-actions'
import { useNavigate } from 'react-router-dom'
import { toggleDelete } from '../../../redux/actions/app-actions'

interface DeleteTaskProps {
	id: string
}
export const DeleteTask = ({ id }: DeleteTaskProps) => {
	const dispatch = useDispatch<ThunkDispatch<IState, unknown, AppActions>>()
	const navigate = useNavigate()
	const onSubmit = (event: any) => {
		event.preventDefault()
		dispatch(deleteTask(id)).finally(() => {
			onCloseModal()
			navigate(-1)
		})
	}

	const onCloseModal = () => {
		dispatch(toggleDelete(false))
	}

	return (
		<Modal>
			<form className="form" style={{ textAlign: 'center' }} onSubmit={onSubmit}>
				<h2>Удалить задачу ?</h2>
				<button type="submit" className="editBtn">
					Удалить
				</button>
				<button type="button" onClick={() => onCloseModal()} className="cancelBtn">
					Отмена
				</button>
			</form>
		</Modal>
	)
}
