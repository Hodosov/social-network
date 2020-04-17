import React from 'react'
import { addNewMassageAcrionCreator, updateNewMassageTextCreator} from '../../redux/Dialogs-reducer'
import { Dialogs } from './Dialogs';

export const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    let addMassage = () => {
    props.store.dispatch(addNewMassageAcrionCreator());
    }
    let onChangeMassage = (message) => {
        props.store.dispatch(updateNewMassageTextCreator(message))
    }

    return (
        <Dialogs 
        updateMessage={onChangeMassage}
        addNewMessage={addMassage}
        dialogsPage={state}
        />
    )
}