import { combineReducers } from 'redux'
import { todosReducer } from './todos-reducer'
import { IState } from '../types'
import { appReducer } from './app-reducer'

export const reducer = combineReducers<IState>({
	todos: todosReducer,
	appState: appReducer,
})
