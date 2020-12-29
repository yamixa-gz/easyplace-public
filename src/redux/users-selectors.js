import {createSelector} from 'reselect'

export const getUsersSelector = (state) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector,
    (users) => {
    return users.filter((u) => true)
})

export const getPagesCount = (state) => {
    return state.usersPage.pagesCount
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getIsFollowingInProgress = (state) => {
    return state.usersPage.isFollowingInProgress
}