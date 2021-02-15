import { usersAPI } from '../api/api'
import { updateObjectInArray } from '../utils/objectHelper'
import { UsersType } from '../types/types'
import { AppStateType } from './redux-store'
import { Dispatch } from 'react'
import { ThunkAction } from 'redux-thunk'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

type InitialStateType = typeof initialState

export let UsersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case (FOLLOW):
            return ({
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
            })
        case (UNFOLLOW):
            return ({
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
            })
        case (SET_USERS):
            return ({
                ...state, users: action.users
            })
        case (SET_CURRENT_PAGE):
            return ({
                ...state, currentPage: action.currentPage
            })
        case (SET_TOTAL_USERS):
            return ({
                ...state, totalUsersCount: action.count
            })
        case (TOGGLE_IS_FETCHING):
            return ({
                ...state, isFetching: action.isFetching
            })
        case (TOGGLE_IS_FOLLOWING_PROGRESS):
            return ({
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            })
        default: return state
    }
}
type ActionsType = FollowSuccessType |
    UnfollowSuccessType |
    SetUsersType |
    SetCurrentPageType |
    SetTotalUsersCountType |
    ToggleIsFetchingType |
    ToggleIsFollowingProgressType

type FollowSuccessType = {
    type: typeof FOLLOW
    userId: number
}

export const followSuccess = (userId: number): FollowSuccessType => ({ type: FOLLOW, userId })

type UnfollowSuccessType = {
    type: typeof UNFOLLOW
    userId: number
}

export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({ type: UNFOLLOW, userId })

type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}

export const setUsers = (users: Array<UsersType>): SetUsersType => ({ type: SET_USERS, users })

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage })

type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS
    count: number
}

export const setTotalUsersCount = (count: number): SetTotalUsersCountType => ({ type: SET_TOTAL_USERS, count })

type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({ type: TOGGLE_IS_FETCHING, isFetching })

type ToggleIsFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export const toggleIsFollowingProgress = (isFetching: boolean,
    userId: number): ToggleIsFollowingProgressType => ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching, userId
    })

export const GetUsers = (currentPage: number,
    pageSize: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch,
        getState) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        let response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
    }

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsType>, 
    userId: number, 
    apiMethod: any, 
    actionCreator: (u: number) => FollowSuccessType | UnfollowSuccessType) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const follow = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch: Dispatch<ActionsType>) => {
    let apiMethod = usersAPI.follow.bind(usersAPI)
    let actionCreator = followSuccess
    _followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
}

export const unfollow = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch: Dispatch<ActionsType>) => {
    let apiMethod = usersAPI.unfollow.bind(usersAPI)
    let actionCreator = unfollowSuccess
    _followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
}