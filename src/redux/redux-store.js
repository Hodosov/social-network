import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from './Profile-reducer';
import  { dialogReducer } from './Dialogs-reducer';
import { UsersReducer } from "./Users-reducer";
import { authReducer } from './authReducer';
import { reducer as fromReducer } from 'redux-form'
import thunk from 'redux-thunk'

let Reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    userPage: UsersReducer,
    auth: authReducer,
    form: fromReducer,
});

export let store = createStore(Reducers,
    compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    )