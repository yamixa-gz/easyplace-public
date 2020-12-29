import * as axios from 'axios'
import {toggleFollowingProgress} from '../redux/users-reducer'

const request = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '28006803-91c0-4464-a645-07d67bbcb4f0'}
})

export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return request.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    setFollowUser: (userId) => {
        return request.post(`follow/${userId}`, {}).then(response => response.data)
    },

    deleteFollowUser: (userId) => {
        toggleFollowingProgress(userId, true)
        return request.delete(`follow/${userId}`).then(response => response.data)
    },
    getUserProfile: (userId) => {
        console.warn('You should use getUserProfile from profileAPI')
        return profileAPI.getUserProfile(userId)
    }
}

export const profileAPI = {
    getUserProfile: (userId) => request.get(`profile/${userId}`).then(response => response.data),
    getUserStatus: (userId) => request.get(`profile/status/${userId}`).then(response => response.data),
    updateStatus: (status) => request.put(`profile/status`, {status}).then(response => response.data),
    savePhoto: (photoFile) => {
        const formData = new FormData()
        formData.append('image', photoFile)
        return request.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },
    saveProfile: (formData) => request.put(`profile`, formData).then(response => response.data),

}

export const authAPI = {
    me: () => request.get(`auth/me`).then(response => response.data),

    login: (email, password, rememberMe = false, captcha) => request.post(`auth/login`,
        {email, password, rememberMe, captcha}).then(response => response.data),

    logout: () => request.delete(`auth/login`).then(response => response.data)

}

export const securityAPI = {
    getCaptchaUrl: () => request.get(`security/get-captcha-url`).then(response => response.data)
}