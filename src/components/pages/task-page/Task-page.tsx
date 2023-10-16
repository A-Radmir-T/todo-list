import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions, IState } from '../../../redux/types'
import { selectIsDelete, selectIsEdit, selectTask } from '../../../redux/selectors'
import { getTaskById, resetState } from '../../../redux/actions/todo-actions'
import styles from './Task-page.module.scss'
import { IoArrowBackOutline } from 'react-icons/io5'
import { FiEdit3 } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Task } from '../../task/Task'
import { DeleteTask } from '../../modals/delete-task/Delete-task'
import { EditTask } from '../../modals/edit-task/Edit-task'
import { toggleDelete, toggleEditTask } from '../../../redux/actions/app-actions'

export const TaskPage = () => {
	const dispatch = useDispatch<ThunkDispatch<IState, unknown, AppActions>>()

	const task = useSelector(selectTask)

	const isDelete = useSelector(selectIsDelete)
	const isEdit = useSelector(selectIsEdit)
	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		if (id) {
			dispatch(getTaskById(id))
		}
	}, [])

	const handleOnClickBack = () => {
		dispatch(resetState())
		navigate(-1)
	}

	return (
		<div className="container">
			<div className={styles.actions}>
				<button onClick={handleOnClickBack}>
					<IoArrowBackOutline />
				</button>

				<div className={styles.buttons}>
					<button
						className={styles.edit}
						type="button"
						onClick={() => dispatch(toggleEditTask(true))}
					>
						<FiEdit3 />
					</button>
					<button
						className={styles.delete}
						type="button"
						onClick={() => dispatch(toggleDelete(true))}
					>
						<RiDeleteBin6Line />
					</button>
				</div>
			</div>
			{task && <Task task={task} />}
			{isDelete && task && <DeleteTask id={task.id || ''} />}
			{isEdit && task && <EditTask task={task} />}
		</div>
	)
}
