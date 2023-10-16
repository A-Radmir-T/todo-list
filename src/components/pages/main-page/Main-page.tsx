import { ChangeEvent, useEffect } from 'react'
import { ITask } from '../../../shared/interfaces'
import { useDebounce } from '../../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions, IState } from '../../../redux/types'
import {
	selectAllTasks,
	selectIsCreate,
	selectIsSorted,
	selectSearchPhrase,
} from '../../../redux/selectors'
import { initState, sortTasks } from '../../../redux/actions/todo-actions'
import { setSearchPhrase } from '../../../redux/actions/todo-actions/set-search-phrase'
import styles from './Main-page.module.scss'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineSortAscending } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { CreateTask } from '../../modals/create-task/Create-task'
import { toggleCreateTask } from '../../../redux/actions/app-actions'

export const MainPage = () => {
	const dispatch = useDispatch<ThunkDispatch<IState, unknown, AppActions>>()

	const todosData: ITask[] = useSelector(selectAllTasks) || []
	const isSorted = useSelector(selectIsSorted)
	const searchPhrase = useSelector(selectSearchPhrase)
	const isCreateTask = useSelector(selectIsCreate)
	const debouncedValue = useDebounce(searchPhrase)

	useEffect(() => {
		if (!todosData.length) {
			dispatch(initState())
		}
	}, [])

	useEffect(() => {
		dispatch(initState())
	}, [debouncedValue])

	const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target
		dispatch(setSearchPhrase(value))
	}
	const handleSort = (): void => {
		dispatch(sortTasks())
	}

	return (
		<>
			<div>
				<div className="container">
					<div className={styles.todos}>
						<div className={styles.search}>
							<input
								type="text"
								placeholder="Поиск задачи"
								value={searchPhrase}
								onChange={handleChangeSearch}
							/>
							<div className={styles.searchIcon}>
								<BsSearch />
							</div>
						</div>

						<div className={styles.sort}>
							<button className={isSorted ? styles.active : ''} onClick={handleSort}>
								<AiOutlineSortAscending />
							</button>
						</div>

						<div className={styles.links}>
							{todosData.length ? (
								todosData.map((task, index) => (
									<NavLink key={task.id} to={`/task/${task.id}`}>
										{task.title}
									</NavLink>
								))
							) : (
								<div className={styles.void}>Пусто</div>
							)}
						</div>
						<button
							className={styles.createTask}
							onClick={() => dispatch(toggleCreateTask(true))}
						>
							+
						</button>

						{isCreateTask && <CreateTask />}
					</div>
				</div>
			</div>
		</>
	)
}
