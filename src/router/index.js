import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/login',
        // name: 'Login',
        component: () =>
            import ('@/views/login')
    },
    {
        path: '/',
        //路由重定向，用来显示进入/后的默认页面
        redirect: { name: 'home' }
    },
    {
        path: '/',
        component: () =>
            import ('@/views/layout'),
        children: [{
                path: 'home',
                name: 'home',
                component: () =>
                    import ('@/views/home')
            },
            {
                path: 'st',
                name: 'st',
                component: () =>
                    import ('@/views/st')
            },
            {
                path: 'zx',
                name: 'zx',
                component: () =>
                    import ('@/views/zx')
            },
            {
                path: 'my',
                name: 'my',
                component: () =>
                    import ('@/views/my')
            },
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router