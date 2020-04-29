import React from 'react'
import { addNewMassageActionCreator, updateNewMassageTextCreator } from '../../redux/Dialogs-reducer'
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        auth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (message) => {
            dispatch(updateNewMassageTextCreator(message))

        },
        addNewMessage: () => {
            dispatch(addNewMassageActionCreator());
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)