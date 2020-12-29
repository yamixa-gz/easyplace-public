import {authAPI, securityAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'SET-USER-DATA'
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
}
export let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
        if (response.resultCode === 0) {
            let {id, login, email} = response.data
            dispatch(setAuthUserData(id, login, email, true))
        }
}
const setAuthUserData = (userId, login, email, isAuth) => ({type: SET_USER_DATA, payload: {
    userId, login, email, isAuth
}})
const setCaptchaUrl = (captchaUrl) => ({ type: SET_CAPTCHA_URL, payload: { captchaUrl } })

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

    const response = await authAPI.login(email, password, rememberMe, captcha)
        if ( response.resultCode === 0) {
            dispatch(getAuthUserData())
            if ( captcha ) dispatch(setCaptchaUrl(null))
        } else {
            let errorMessage = response.messages.length > 0 ? response.messages[0] : "Unknown error!"
            if ( response.resultCode === 10 ) {
                   const captchaUrl = await securityAPI.getCaptchaUrl()
                        dispatch(setCaptchaUrl(captchaUrl.url))
                        dispatch(stopSubmit('login', {_error: errorMessage}))
            } else {
                dispatch(stopSubmit('login', {_error: errorMessage}))
            }
        }
}
export const logout = () => async (dispatch) => {

    let response = await authAPI.logout()
        if ( response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
}
export default authReducer
