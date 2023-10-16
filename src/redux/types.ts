import { ITask } from '../shared/interfaces'
import { ThunkAction } from 'redux-thunk'
import {
	CREATE_TASK,
	DELETE_TASK,
	GET_TASK,
	INIT_STATE,
	RESET_STATE,
	SEARCH_TASKS,
	SORT_TASKS,
	TOGGLE_CREATE,
	TOGGLE_DELETE,
	TOGGLE_EDIT,
	TOGGLE_LOADING,
	UPDATE_TASK,
} from './consts'

export interface ITodosState {
	allTasks: ITask[]
	selectedTask: ITask
	isSorted: boolean
	searchPhrase: string
}

export interface IAppState {
	isLoading: boolean
	isCreateTask: boolean
	isDeleteTask: boolean
	isEditTask: boolean
}

export type InitState = {
	type: typeof INIT_STATE
	tasks: ITask[]
}

export type ICreateTask = {
	type: typeof CREATE_TASK
	task: ITask
}

export type GetTaskById = {
	type: typeof GET_TASK
	task: ITask
}

export type ResetStateType = {
	type: typeof RESET_STATE
}

export type UpdateTaskType = {
	type: typeof UPDATE_TASK
	task: ITask
}
export type DeleteTaskType = {
	type: typeof DELETE_TASK
}

export type SortTasksType = {
	type: typeof SORT_TASKS
	sortedTasks: ITask[]
}

export type SearchTask = {
	type: typeof SEARCH_TASKS
	searchPhrase: string
}

export type ToggleLoadingType = {
	type: typeof TOGGLE_LOADING
	isLoading: boolean
}
export type ToggleEditType = {
	type: typeof TOGGLE_EDIT
	isEdit: boolean
}
export type ToggleCreateType = {
	type: typeof TOGGLE_CREATE
	isCreate: boolean
}
export type ToggleDeleteType = {
	type: typeof TOGGLE_DELETE
	isDelete: boolean
}

export interface IState {
	todos: ITodosState
	appState: IAppState
}

export type AppActions =
	| InitState
	| ICreateTask
	| GetTaskById
	| ResetStateType
	| UpdateTaskType
	| DeleteTaskType
	| SortTasksType
	| SearchTask
	| ToggleLoadingType
	| ToggleEditType
	| ToggleCreateType
	| ToggleDeleteType

export type ThunkActions = ThunkAction<Promise<void>, IState, unknown, AppActions>
