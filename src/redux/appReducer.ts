import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type initialStateType = {
    initialized: boolean
}

const initialState: initialStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: initializedSuccessType): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return ({
                ...state,
                initialized: true
            })
            break;
        default:
            return state
    }
}

type initializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = ():initializedSuccessType => ({ type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch: any) => {
    let promise =  dispatch(getAuthUserData())
    Promise.all([promise]).then(() => dispatch(initializedSuccess()))
}