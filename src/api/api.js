import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '67312575-91c7-43fb-820c-3acb5dba8dbf'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Obsolete method. Please profileApi object')
        return profileApi.getProfile(userId)
    },
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}

export const  profileApi ={
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus (userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status : status})
    },
    savePhoto(file){
        const formData = new FormData
        formData.append('image', file)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/for-data'
            }
        })
    },
    saveProfile(data){
        return instance.put('profile', data)
    }
}