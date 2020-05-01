import React from 'react'
import { addNewMassageActionCreator, updateNewMassageTextCreator } from '../../redux/Dialogs-reducer'
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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

export const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs)