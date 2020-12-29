import {profileAPI, usersAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

const ADD_POST_PROFILE = 'ADD-POST-PROFILE'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'
const SET_PHOTO_FILE = 'SET-PHOTO-FILE'
const SET_PROFILE_DATA = 'SET-PROFILE-DATA'
const TOGGLE_EDIT_MODE = 'TOGGLE-EDIT-MODE'
const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null,
    status: '',
    editMode: false

}
export let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_PROFILE:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {
                    id: 5,
                    message: action.newMyPostsText,
                    likesCount: 0
                }]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.userId)
            }
        case SET_PHOTO_FILE:
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        case SET_PROFILE_DATA:
            return {
                ...state, profile: {...state.profile, ...action.formData, contacts: { ...action.formData.contacts }}
            }
        case TOGGLE_EDIT_MODE:
            return {
                ...state, editMode: action.editMode
            }
        default:
            return state
    }
}
export const addPostProfile = (newMyPostsText) => ({type: ADD_POST_PROFILE, newMyPostsText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (userId) => ({type: DELETE_POST, userId})
export const setPhotoFile = (photos) => ({type: SET_PHOTO_FILE, photos})
export const saveProfileData = (formData) => ({type: SET_PROFILE_DATA, formData})
export const setToggleEditMode = (editMode) => ({type: TOGGLE_EDIT_MODE, editMode})


export  const getProfile = (userId) => async (dispatch) => {
        let data = await usersAPI.getUserProfile(userId)
                dispatch(setUserProfile(data))
    }
export const updateStatus = (status) => async (dispatch)=> {

    let response = await profileAPI.updateStatus(status)
        if ( response.resultCode === 0 ) {
            dispatch(setUserStatus(status))
        }
 }
export const getStatus = (userId) => async (dispatch)=> {
    let status = await profileAPI.getUserStatus(userId)
        dispatch(setUserStatus(status))
}
export const savePhoto = (photoFile) => async (dispatch)=> {
    let response = await profileAPI.savePhoto(photoFile)
    if ( response.resultCode === 0 ) {
        dispatch(setPhotoFile(response.data.photos))
    }
}
const toLowerCaseFirstLetter = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
}
export const saveProfile = (formData) => async (dispatch)=> {
    let response = await profileAPI.saveProfile(formData)
    if ( response.resultCode === 0 ) {
        dispatch(saveProfileData(formData))
        dispatch(setToggleEditMode(false))
    } else {
        let checkedFields = {
             contacts: {}
        }
            for(let str of response.messages) {
                let index = str.indexOf('(Contacts->')
                    if ( index !== -1 ) {
                       const field = str.slice(index + 11, str.indexOf(')'))
                       const errorMessage = str.slice(0, str.indexOf('(Contacts->') - 1)
                            checkedFields['contacts'][toLowerCaseFirstLetter(field)] = errorMessage
                    }
            }
        dispatch(stopSubmit('edit-profile', checkedFields))
    }
}
export const toggleEditMode = (editMode) => (dispatch) => {
    dispatch(setToggleEditMode(editMode))
}
export default profileReducer
