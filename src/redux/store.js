import { dialogReducer } from './Dialogs-reducer'
import { profileReducer } from './Profile-reducer'


export const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, massage: 'Hello man', like: 2 },
                { id: 2, massage: 'Yo, how are your?', like: 4 },
                { id: 3, massage: 'I create SPA', like: 20 },
                { id: 4, massage: 'I go to the park', like: 3 },
                { id: 5, massage: 'its COOL', like: 2 },
                { id: 6, massage: 'Go hoome', like: 5 },
                { id: 7, massage: 'Working REACT', like: 15 },
            ],
            newPostText: 'it-kamasutra'
        },
        dialogPage: {
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
    },

    getState() {
        return this._state
    },

    _callSubsriber() {

    },

    subscribe(observer) {
        this._callSubsriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._callSubsriber(this._state)
    }
}
