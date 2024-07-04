import { appReducer } from "./reducer";
import { createStore, compose } from "redux"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(appReducer, composeEnhancers())
	// const createStore = (reducer) => {
	// 	let state;

	// 	return {
	// 		dispatch: (action) => {
	// 			state = reducer(state, action);
	// 		},
	// 		getState: () => state,
	// 	};
	// };