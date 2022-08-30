<template>
    <div class='layout-container'>
        <!-- 子路由出口 -->
        <router-view></router-view>
        <!-- tabbar效果 -->
        <van-tabbar route>
            <van-tabbar-item to="/home">
                <i slot="icon" class="iconfont sc-shouye"></i>
                <span>首页</span>
            </van-tabbar-item>
            <van-tabbar-item to="/st">
                <i slot="icon" class="iconfont sc-1"></i>
                <span>刷题</span>
            </van-tabbar-item>
            <van-tabbar-item to="/zx">
                <i slot="icon" class="iconfont sc-zixun"></i>
                <span>咨询</span>
            </van-tabbar-item>
            <van-tabbar-item to="/my">
                <i slot="icon" class="iconfont sc-gerenzhongxin"></i>
                <span>{{ $store.state.user? '我的' : '未登录' }}</span>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  name: 'loginPage',
  components: {},
  data () {
    return {
     
    }
  },
  computed: {},
  watch: {},
  methods: {
     
  },
  created () {

  },
  mounted () {
    
  }
}
</script>
<style scoped lang="less">
.layout-container {
    .van-tabbar-item__icon {
        height: 140px;
        .iconfont {
            font-size: 35px;
        }
        span {
            font-size: 20px;
        }
    }
}
</style>