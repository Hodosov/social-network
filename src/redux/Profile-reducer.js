import { usersAPI, profileApi } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'

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
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_POST):
            let newPost = {
                id: 8,
                massage: action.AddNewPostForm,
                like: 6
            }
            if (newPost.massage == '') {
                alert('вы не можете отправить пустое сообщение')
            }
            else {
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                }
            }
     
        case SET_USERS_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case (SET_STATUS):
            return({
                ...state,
                status: action.status
            })

        default: return state
    }
}

export const addPostActionCreator = (AddNewPostForm) => {
    return {
        type: ADD_POST, AddNewPostForm
    }
}

export const setStatusAC = (status) => ({ type: SET_STATUS, status})

export const setUserProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const setUsersStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId).then(response => {
        dispatch(setStatusAC(response.data))
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status).then(response => {
        if(response.data.resultCode === 0){
        dispatch(setStatusAC(status))}
    })
}