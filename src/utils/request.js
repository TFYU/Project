//axios二次封装
import axios from 'axios'
//请求模块
import store from '@/store'

//创造一个axios实例
const request = axios.create({
    baseURL: 'https://haozhiyuan.ltd'
})

// 添加请求拦截器
request.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    const { user } = store.state
    if (user && user.token) {
        config.headers.Authorization = `Bearer ${store.state.user.token}`
    }
    // console.log(config);
    return config
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(
    // 响应成功进入第一个函数
    function(response) {
        return response;
    },
    // 响应失败进入第二个函数
    async function(error) {
        // 如果响应码是401，则请求获取新的token
        if (error.response && error.response.status === 401) {
            const user = store.state.user
            if (!user || !user.refresh_token) {
                router.push('/login')
                    //停止代码继续执行
                return
            }
            //如果有refresh_token，则请求获取新的 token
            try {
                const res = await axios({
                        method: 'PUT',
                        url: 'https://haozhiyuan.ltd/app/v1_0/authorizations',
                        headers: {
                            Authorization: `Bearer ${user.refresh_token}`
                        }
                    })
                    //如果获取成功，则把新的 token 更新到容器中
                console.log('刷新token成功', res);
                store.commit('setUser', {
                    token: res.data.data.token,
                    refresh_token: user.refresh_token
                })
                return request(error.config)
            } catch (err) {
                console.log('刷新token失败', err);
                router.push('/login')
            }
        }

    });

export default request