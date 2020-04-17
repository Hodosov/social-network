import React from 'react'
import { addNewMassageAcrionCreator, updateNewMassageTextCreator } from '../../redux/Dialogs-reducer'
import { Dialogs } from './Dialogs';
import StoreContext from '../../StoreContext';

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {

                let state = store.getState().dialogsPage

                let addMassage = () => {
                    store.dispatch(addNewMassageAcrionCreator());
                }
                let onChangeMassage = (message) => {
                    store.dispatch(updateNewMassageTextCreator(message))
                }

                return (
                    <Dialogs
                        updateMessage={onChangeMassage}
                        addNewMessage={addMassage}
                        dialogsPage={state}
                    />
                )
            }}
        </StoreContext.Consumer>
    )
}