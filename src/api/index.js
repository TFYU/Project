import request from '@/utils/request'

//用户登录
export const login = data => {
    return request({
        method: 'POST',
        url: '/app/v1_0/authorizations',
        data
    })
}

// 获取短信验证码
export const getSmsCode = mobile => {
    return request({
        method: 'GET',
        url: `/app/v1_0/sms/codes/${mobile}`
    })
}

// 获取用户自己信息
export const getUserInfo = () => {
    return request({
        method: 'GET',
        url: '/app/v1_0/user',
    })
}

// 获取频道列表
export const getUserChannels = () => {
    return request({
        method: 'GET',
        url: '/app/v1_0/user/channels',
    })
}

// 获取文章内容
export const getUserArticles = params => {
    return request({
        method: 'GET',
        url: '/app/v1_1/articles',
        params
    })

}