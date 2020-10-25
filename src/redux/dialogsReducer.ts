const ADD_NEW_MASSAGE = 'ADD_NEW_MASSAGE'

type dialogType = { 
    id: number
    name: string
}

type messageType = { 
    id: number
    massage: string
}

let initialState = {
    dialogs: [
        { id: 1, name: 'Rodert' },
        { id: 2, name: 'Marina' },
        { id: 3, name: 'Alexey' },
        { id: 4, name: 'Anna' },
        { id: 5, name: 'Rodert' },
        { id: 6, name: 'Mihail' },
    ] as Array<dialogType>,
    massages: [
        { id: 1, massage: 'hello' },
        { id: 2, massage: 'how are you?' },
        { id: 3, massage: 'Ist cool post' },
        { id: 4, massage: 'I go to the park' },
        { id: 5, massage: 'Go kino' },
        { id: 6, massage: 'Go hoome' },
    ] as Array<messageType>,
}

export type initialStateTypes = typeof initialState

export const dialogReducer = (state = initialState, action: any): initialStateTypes  => {
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

type addNewMassageType = {
    type: typeof ADD_NEW_MASSAGE
    newMassageText: string
}

export const addNewMassageActionCreator = (newMassageText: string): addNewMassageType => {
    return {
        type: ADD_NEW_MASSAGE, newMassageText
    }
}