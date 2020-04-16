import { createStore, combineReducers } from "redux";
import { profileReducer } from './Profile-reducer';
import  { dialogReducer } from './Dialogs-reducer';

let Reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogReducer,
});

export let store = createStore(Reducers)