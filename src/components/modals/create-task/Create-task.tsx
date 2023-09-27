import { Modal } from '../modal/Modal'
import { useForm } from 'react-hook-form'
import { ITask } from '../../../shared/interfaces/'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../../contexts'

export const CreateTask = () => {
	const { handleCreateTask, onCloseModal } = useContext(MainContext)
	const {
		handleSubmit,
		register,
		setFocus,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})
	const onSubmit = ({ title }: { [key: string]: string }) => {
		const newTask: ITask = { title }
		handleCreateTask(newTask)
	}

	useEffect(() => {
		setFocus('title')
	}, [])

	return (
		<Modal>
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<h2>Создать задачу</h2>
				{errors?.title && <p className="error">{`${errors?.title?.message}`}</p>}
				<textarea {...register('title', { required: 'Поле не должно быть пустым' })} />
				<button type="submit" className="editBtn">
					Создать
				</button>
				<button type="button" onClick={() => onCloseModal()} className="cancelBtn">
					Отмена
				</button>
			</form>
		</Modal>
	)
}
