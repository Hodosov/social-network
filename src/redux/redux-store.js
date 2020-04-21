import { createStore, combineReducers } from "redux";
import { profileReducer } from './Profile-reducer';
import  { dialogReducer } from './Dialogs-reducer';
import { UsersReducer } from "./Users-reducer";

let Reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    userPage: UsersReducer
});

export let store = createStore(Reducers)