import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { addNewMassageAcrionCreator, updateNewMassageTextCreator} from '../../redux/Dialogs-reducer'

const Textrea = styled.textarea`
    resize: none;
    width: 520px;
    height: 60px;
    border: solid;
    border-radius: 10px;
    border-color: #C9F4F1;
`

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
        <Link to={'/dialogs/' + '#' + props.id}>{props.name}</Link>
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

    let newMassageElement = React.createRef()

    let addMassage = () => {
        props.addNewMessage()
    }
    let onChangeMassage = () => {
        let message = newMassageElement.current.value
        props.updateMessage(message)
        
    }


    return (
        <Wrapper>
            <UserName>
                {dialogs}
            </UserName>
            <Massages>
                {massages}
                    <div>
                <Textrea
                onChange={onChangeMassage}
                ref={newMassageElement}
                value={state.newMassageText}
                placeholder='введите сообщение'
                ></Textrea>
                <button
                onClick={addMassage}
                >Отправить</button>
            </div>
            </Massages>
        
        </Wrapper>
    )
}