import { createStore, combineReducers } from "redux";
import { profileReducer } from './Profile-reducer';
import  { dialogReducer } from './Dialogs-reducer';

let Reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
});

export let store = createStore(Reducers)