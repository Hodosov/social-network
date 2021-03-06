import { addNewMassageActionCreator } from '../../redux/dialogsReducer'
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

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs)

    export default DialogsContainer