import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'

Vue.use(Vuex)

const TOKEN_KEY = 'SC_USER'
export default new Vuex.Store({
    state: {
        //一个对象，储存当前登录用户信息（token等数据）
        //user :null
        user: getItem(TOKEN_KEY)
    },
    getters: {},
    mutations: {
        //修改state
        setUser(state, data) {
            state.user = data;
            //为防止丢失,需要把数据备份到本地储存
            setItem(TOKEN_KEY, state.user)
        }
    },
    actions: {},
    modules: {}
})