import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { accountReducer, profileReducer } from '../reducers'

var store;

export default {
	configureStore: () => {
		const reducers = combineReducers({
			account: accountReducer,
			profile: profileReducer
		})

		store = createStore(
			reducers,
			applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}
}
