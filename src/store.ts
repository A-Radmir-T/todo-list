import { applyMiddleware, compose, createStore } from 'redux'
import { reducer } from './redux/reducers/reducer'
import thunk from 'redux-thunk'

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
