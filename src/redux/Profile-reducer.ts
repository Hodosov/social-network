import { usersAPI, profileApi } from '../api/api'
import { stopSubmit } from 'redux-form'

const ADD_POST = 'ADD_POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

type PostType = {
    id: number
    massage: string
    like: number
}

type ProfileType = {
    userId?: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: ContactsType
    photos: PhotosType
}

type PhotosType = {
    small: string | null
    large: string | null
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

let initialState = {
    posts: [
        { id: 1, massage: 'Hello man', like: 2 },
        { id: 2, massage: 'Yo, how are your?', like: 4 },
        { id: 3, massage: 'I create SPA', like: 20 },
        { id: 4, massage: 'I go to the park', like: 3 },
        { id: 5, massage: 'its COOL', like: 2 },
        { id: 6, massage: 'Go home', like: 5 },
        { id: 7, massage: 'Working REACT', like: 15 },
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
}

export type InitialStateType = typeof initialState

export const profileReducer = (state = initialState, action: any): InitialStateType => {
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
            return ({
                ...state,
                status: action.status
            })
        case (SAVE_PHOTO_SUCCESS):
            return ({
                ...state,
                profile: { ...state.profile, photos: action.photo }
            })

        default: return state
    }
}

type AddPostActionCreatorType = {
    type: typeof ADD_POST
    AddNewPostForm: string
}

export const addPostActionCreator = (AddNewPostForm: string): AddPostActionCreatorType => {
    return {
        type: ADD_POST, AddNewPostForm
    }
}

type SetStatusACType = {
    type: typeof SET_STATUS
    status: string
}

export const setStatusAC = (status: string): SetStatusACType => ({ type: SET_STATUS, status })

type SetUserProfileType = {
    type: typeof SET_USERS_PROFILE
    profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({ type: SET_USERS_PROFILE, profile })

type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photo: PhotosType
}

export const savePhotoSuccess = (photo: PhotosType): SavePhotoSuccessType => ({ type: SAVE_PHOTO_SUCCESS, photo })


export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const setUsersStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileApi.getStatus(userId)
    dispatch(setStatusAC(response.data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileApi.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (data: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    let response = await profileApi.saveProfile(data)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('profile', { _error: response.data.messages[0] }))
        return Promise.reject(response.data.messages[0])
    }
}