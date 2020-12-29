import {usersAPI} from '../api/api'

let initialState = {
    users: [  ],
    pagesCount: 1,
    currentPage: 3,
    totalUsersCount: 20,
    pageSize: 5,
    isFetching: false,
    isFollowingInProgress: []
}
const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_USERS = 'SET-USERS'
const TOTAL_COUNT = 'TOTAL-COUNT'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

export let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
            ...state,
            users: state.users.map((u) => {
                if (u.id === action.userId) {
                    return {
                        ...u,
                        followed: action.followStatus
                    }
                }
                return u
            })
    }
        case SET_USERS:
            return  {
                ...state,
                users:  action.users
            }
        case TOTAL_COUNT:
            return  {
                ...state,
                pagesCount: Math.ceil(action.totalUsersCount / state.pageSize || 5)
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.toggleIsFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return  {
                ...state,
                isFollowingInProgress: action.followingProgress
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter((id) => id !== action.userId)
            }
        }
        default: return state
    }
}
let toggleFollow = (userId, followStatus) => {
    return {
        type: TOGGLE_FOLLOW,
        userId: userId,
        followStatus
    }
}
let setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
let setPagesCount = (totalCount) => {
    return {
        type: TOTAL_COUNT,
        totalUsersCount: totalCount
    }
}
export let setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: page
    }
}
let toggleIsFetching = (toggleIsFetching) => {
    return{
        type: TOGGLE_IS_FETCHING,
        toggleIsFetching: toggleIsFetching
    }
}
export let toggleFollowingProgress = (userId, followingProgress) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        followingProgress,
        userId
    }
}

export const requestUsers = (page, pageSize) =>
    (dispatch) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(page, pageSize).then(data => {
            console.log(data);
            dispatch(toggleIsFetching(false))
            dispatch(setCurrentPage(page))
            dispatch(setUsers(data.items))
            dispatch(setPagesCount(data.totalCount))
        })
}
export const toggleUserFollow = (userId, isFollowed) =>
    (dispatch) => {
        if (isFollowed) {
            dispatch(toggleFollowingProgress(userId, true))
            usersAPI.deleteFollowUser(userId)
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(toggleFollow(userId, false))
                    }
                    dispatch(toggleFollowingProgress(userId, false))
                })
        } else {
            dispatch(toggleFollowingProgress(userId, true))
            usersAPI.setFollowUser(userId)
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(toggleFollow(userId, true))
                    }
                    dispatch(toggleFollowingProgress(userId, false))
                })
        }
    }
export default usersReducer