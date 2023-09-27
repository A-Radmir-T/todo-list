import { Modal } from '../modal/Modal'
import { useContext } from 'react'
import { TaskContext } from '../../../contexts'

export const DeleteTask = () => {
	const { task, handleDeleteTask, onCloseModal } = useContext(TaskContext)
	const onSubmit = (event: any) => {
		event.preventDefault()
		if (task?.id) {
			handleDeleteTask(task.id)
		}
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
