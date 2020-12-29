import {getAuthUserData} from './auth-reduser'

const SET_INITIALIZED = 'SET-INITIALIZED'
const initialState = {
    initialized: false
}
export let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}
const initializedSuccess = () => ({
    type: SET_INITIALIZED
})
export const initializeApp = () => (dispatch) => {
    Promise.all([getAuthUserData])
        .then(() => dispatch(initializedSuccess()))
}
export default appReducer