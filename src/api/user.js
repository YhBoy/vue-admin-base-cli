

import request from '@/utils/request.js'
// 用户登录
export const login = (data)=>{
    return request({
        url:'/mp/v1_0/authorizations',
        method:'POST',
        data
    })
}

// 获取用户信息
export const getUserProfile = ()=>{
    const user = JSON.parse(sessionStorage.getItem("user"))
    return request({
        method: 'GET',
        url: '/mp/v1_0/user/profile',
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    })
}









