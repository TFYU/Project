import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入移动端
import 'lib-flexible/flexible' // 移动端适配文件

//引入vant样式
import {
    NavBar,
    Form,
    Field,
    Button,
    Toast,
    CountDown,
    Tabbar,
    TabbarItem,
    Grid,
    GridItem,
    Cell,
    CellGroup,
    Image as VanImage,
    Dialog,
    Tab,
    Tabs,
    List,
    PullRefresh
} from 'vant';
//引入组件样式
import 'vant/lib/index.less'
Vue.use(NavBar);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
Vue.use(CountDown);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);
Vue.use(Dialog);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(List);
Vue.use(PullRefresh);
//引入全局样式
import '@/styles/index.less'


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')