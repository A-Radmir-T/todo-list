import { useForm } from 'react-hook-form'
import { Modal } from '../modal/Modal'
import { ITask } from '../../../shared/interfaces/'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateTask } from '../../../redux/actions/todo-actions'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions, IState, ITodosState } from '../../../redux/types'
import { toggleEditTask } from '../../../redux/actions/app-actions'

interface EditTaskProps {
	task: ITask
}

export const EditTask = ({ task }: EditTaskProps) => {
	const {
		handleSubmit,
		register,
		setFocus,
		formState: { errors },
	} = useForm({
		defaultValues: {
			title: task.title,
		},
		mode: 'onChange',
	})
	const dispatch = useDispatch<ThunkDispatch<IState, unknown, AppActions>>()
	const onSubmit = (data: ITask) => {
		const editedTask: ITask = { ...task, ...data }
		dispatch(updateTask(editedTask)).finally(() => {
			onCloseModal()
		})
	}

	const onCloseModal = () => {
		dispatch(toggleEditTask(false))
	}

	useEffect(() => {
		setFocus('title')
	}, [])
	return (
		<Modal>
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<h2>Редактировать</h2>
				{errors?.title && <p className="error">{`${errors?.title?.message}`}</p>}
				<textarea {...register('title', { required: 'Поле не должно быть пустым' })} />
				<button type="submit" className="editBtn">
					Изменить
				</button>
				<button type="button" onClick={() => onCloseModal()} className="cancelBtn">
					Отмена
				</button>
			</form>
		</Modal>
	)
}
