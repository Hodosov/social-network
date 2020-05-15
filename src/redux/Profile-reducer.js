import { usersAPI, profileApi } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
    posts: [
        { id: 1, massage: 'Hello man', like: 2 },
        { id: 2, massage: 'Yo, how are your?', like: 4 },
        { id: 3, massage: 'I create SPA', like: 20 },
        { id: 4, massage: 'I go to the park', like: 3 },
        { id: 5, massage: 'its COOL', like: 2 },
        { id: 6, massage: 'Go home', like: 5 },
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
                return {
                    ...state,
                    posts: [...state.posts, newPost],
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
        case(SAVE_PHOTO_SUCCESS):
            return({
                ...state,
                profile: {...state.profile, photos: action.photo}
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

export const savePhotoSuccess = (photo) => ({type: SAVE_PHOTO_SUCCESS, photo})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(response.data))
}

export const setUsersStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getStatus(userId)
        dispatch(setStatusAC(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateStatus(status)
        if(response.data.resultCode === 0){
        dispatch(setStatusAC(status))}
}

export const savePhoto =(file) => async (dispatch) => {
    let response = await profileApi.savePhoto(file)
    if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}