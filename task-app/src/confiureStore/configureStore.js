import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import taskReducer from '../reducers/taskreducers'
import usersReducer from '../reducers/userReducer'

const configureStore = ()=>{
    const store = createStore(combineReducers({
       tasks:taskReducer,
       users:usersReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore