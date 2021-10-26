import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import listingReducer from './reducers/listingReducer'

const rootReducer = combineReducers({
    house: listingReducer
})

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, middleware)