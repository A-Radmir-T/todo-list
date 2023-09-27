import { createContext } from 'react'
import { ITask } from '../shared/interfaces'

interface IMainContext {
	handleCreateTask: (data: ITask) => void
	onCloseModal: () => void
}

export const MainContext = createContext<IMainContext>({
	handleCreateTask: () => {},
	onCloseModal: () => {},
})
