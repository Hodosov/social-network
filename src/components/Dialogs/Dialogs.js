import React from 'react'
import styled from 'styled-components';
import { NavLink, Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../common/FormsControl'
import { required, maxLengthCreator } from '../../utils/validators'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 10fr;
    margin: 10px;
`

const UserName = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Massages = styled.div`
    padding: 20px;
`

const Link = styled(NavLink)`
    color: #000;
    text-decoration: none;
    :hover{
        color: #00caf4;
        cursor: pointer;
    }
`

const DialogItem = (props) => {
    return (
        <Link to={`/dialogs/#${props.id}`}>{props.name}</Link>
    )
}

const Massage = (props) => {
    return (
        <div>{props.massage}</div>
    )
}

export const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogs = state.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name} />)

    let massages = state.massages.map(el => <Massage key={el.id} massage={el.massage} />)

       let addNewMassage = (values) => {
        props.addNewMessage(values.newMassageBody)
    }

    if(!props.auth) return <Redirect to={'/login'} />
    return (
        <Wrapper>
            <UserName>
                {dialogs}
            </UserName>
            <Massages>
                {massages}
                    <div>
                <AddMassageFormRedux onSubmit={addNewMassage}/>
            </div>
            </Massages>
        </Wrapper>
    )
}

const maxLength = maxLengthCreator(15)

const AddMassageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea} 
            name='newMassageBody'
            placeholder='введите сообщение'
            validate={required, maxLength}/>
                <button>Отправить</button>
        </form>
    )
}
const AddMassageFormRedux = reduxForm({
    form: 'dialogAddMassageForm'
})(AddMassageForm)