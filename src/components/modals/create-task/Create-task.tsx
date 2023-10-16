import { Modal } from '../modal/Modal'
import { useForm } from 'react-hook-form'
import { ITask } from '../../../shared/interfaces/'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions, IState } from '../../../redux/types'
import { createTask } from '../../../redux/actions/todo-actions'
import { toggleCreateTask } from '../../../redux/actions/app-actions'

export const CreateTask = () => {
	const dispatch = useDispatch<ThunkDispatch<IState, unknown, AppActions>>()
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
		dispatch(createTask(newTask)).finally(() => {
			onCloseModal()
		})
	}

	const onCloseModal = () => {
		dispatch(toggleCreateTask(false))
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
