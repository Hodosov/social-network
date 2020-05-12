import { usersAPI} from './../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'



let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export let UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case (FOLLOW):
            return ({
                ...state,
                users: state.users.map((u) => {
                    if(u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u
                })
            })
            case (UNFOLLOW):
                return ({
                    ...state,
                    users: state.users.map((u) => {
                        if(u.id === action.userId) {
                            return {
                                ...u, followed: false
                            }
                        }
                        return u
                    })
                })

            case(SET_USERS):
            return ({
                ...state, users: action.users
            })

            case(SET_CURRENT_PAGE):
            return ({
                ...state, currentPage: action.currentPage
            })
            case(SET_TOTAL_USERS):
            return ({
                ...state, totalUsersCount: action.count
            })

            case(TOGGLE_IS_FETCHING):
            return ({
                ...state, isFetching: action.isFetching
            })

            case(TOGGLE_IS_FOLLOWING_PROGRESS):
            return ({
                ...state,
                followingInProgress: action.isFetching 
                ? [ ...state.followingInProgress, action.userId]                
                : [...state.followingInProgress.filter(id => id !== action.userId)]
            })


        default: return state
    }
}

export const followSucsess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSucsess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS, count})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const GetUsers = (currentPage, pageSize) => async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))

    let response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
}

export const follow = (userId) => async (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
                            
    let response = await usersAPI.follow(userId)
        if(response.data.resultCode === 0){
            dispatch(followSucsess(userId))
        }
    dispatch(toggleIsFollowingProgress(false, userId))
}


export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
                            
    let response = await usersAPI.unfollow(userId)
        if(response.data.resultCode === 0){
            dispatch(unfollowSucsess(userId))
        }
    dispatch(toggleIsFollowingProgress(false, userId))
}