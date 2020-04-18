import React from 'react'
import { addNewMassageAcrionCreator, updateNewMassageTextCreator } from '../../redux/Dialogs-reducer'
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (message) => {
            dispatch(updateNewMassageTextCreator(message))

        },
        addNewMessage: () => {
            dispatch(addNewMassageAcrionCreator());
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)