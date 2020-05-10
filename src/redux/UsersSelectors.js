import { createSelector } from "reselect"

 const getUsers = (state) => {
    return state.userPage.users
}

//  const getUsersSelector = (state) => {
//     return getUsers(state).filter(u => true)
// }

export const getUserSuperSelector =  createSelector(getUsers, (users) => {
    return users.filter(u => true) })


export const getPageSize = (state) => {
    return state.userPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.userPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.userPage.currentPage
}

export const getIsFetching = (state) => {
    return state.userPage.isFetching
}

export const getIsFollowInProgress = (state) => {
    return state.userPage.followingInProgress
}
