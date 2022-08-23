import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入vant样式
import { Button, Tab, Tabs } from 'vant';
//引入组件样式
import 'vant/lib/index.less'
Vue.use(Button);
Vue.use(Tab);
Vue.use(Tabs);

//引入全局样式
import '@/styles/index.less'


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')