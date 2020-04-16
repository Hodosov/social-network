import { store } from './store'

const ADD_NEW_MASSAGE = 'ADD_NEW_MASSAGE'
const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE_NEW_MASSAGE_TEX'

let initState = {
    dialogs: [
        { id: 1, name: 'Rodert' },
        { id: 2, name: 'Marina' },
        { id: 3, name: 'Alexey' },
        { id: 4, name: 'Anna' },
        { id: 5, name: 'Rodert' },
        { id: 6, name: 'Mihail' },
    ],
    massages: [
        { id: 1, massage: 'hello' },
        { id: 2, massage: 'how are you?' },
        { id: 3, massage: 'Ist cool post' },
        { id: 4, massage: 'I go to the park' },
        { id: 5, massage: 'Go kino' },
        { id: 6, massage: 'Go hoome' },
    ],
    newMassageText: ''
}

export const dialogReducer = (state = initState, action) => {

    switch (action.type) {

        case (ADD_NEW_MASSAGE):

            let newMassage = {
                id: 8,
                massage: state.newMassageText
            }
            if (newMassage.massage === '') {
                alert('aaaaa')
            } else {
                state.massages.push(newMassage)
                state.newMassageText = ''
                return state
            }


        case (UPDATE_NEW_MASSAGE_TEXT):
            state.newMassageText = action.newMassageText
            return state

        default: return state
    }
}

export const addNewMassageAcrionCreator = () => {
    return {
        type: ADD_NEW_MASSAGE
    }
}

export const updateNewMassageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MASSAGE_TEXT,
        newMassageText: text
    }
}

