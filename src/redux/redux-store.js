import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import profileReducer from './profile-reduser'
import dialogsReducer from './dialogs-reduser'
import sidebarReducer from './sidebar-reduser'
import usersReducer from './users-reducer'
import authReducer from './auth-reduser'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {appReducer} from './app-reduser'

const reducers = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
))
window.__store__ = store
//let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store


