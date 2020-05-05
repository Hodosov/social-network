import React from 'react'
import { addNewMassageActionCreator } from '../../redux/Dialogs-reducer'
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
        addNewMessage: (newMassageBody) => {
            dispatch(addNewMassageActionCreator(newMassageBody));
        }
    }
}

export const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs)