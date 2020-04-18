const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UODATE-NEW-POST-TEXT'

let initialState = {
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
}

export const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {

        let newPost = {
            id: 8,
            massage: state.newPostText,
            like: 6
        }
        if (newPost.massage == '') {
            alert('вы не можете отправить пустое сообщение')
        }
        else {
            let StateCopy = { ...state}
            StateCopy.posts = [ ...state.posts]
            StateCopy.posts.push(newPost)
            StateCopy.newPostText = ''
            return StateCopy
        }

    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
        let StateCopy = { ...state}
        StateCopy.newPostText = action.newText
        return StateCopy
    }

    return state;
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}