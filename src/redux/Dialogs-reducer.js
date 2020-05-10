const ADD_NEW_MASSAGE = 'ADD_NEW_MASSAGE'

let initialState = {
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
}

export const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_NEW_MASSAGE):

            let newMassage = {
                id: 8,
                massage: action.newMassageText
            }
            
                return { 
                    ...state,
                    massages: [ ...state.massages, newMassage ],                    
                }
        default: return state
    }
}

export const addNewMassageActionCreator = (newMassageText) => {
    return {
        type: ADD_NEW_MASSAGE, newMassageText
    }
}