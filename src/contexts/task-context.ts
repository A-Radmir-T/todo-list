import { createContext } from 'react'
import { ITask } from '../shared/interfaces'

interface ITaskContext {
	task: ITask | null
	handleUpdateTask: (data: ITask) => void
	handleDeleteTask: (id: string) => void
	onCloseModal: () => void
}

export const TaskContext = createContext<ITaskContext>({
	handleUpdateTask: () => {},
	handleDeleteTask: () => {},
	task: null,
	onCloseModal: () => {},
})
