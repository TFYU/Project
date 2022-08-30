<template>
    <div class='layout-container'>
       <!-- 已登录头部 -->
       <div class="alredy-dl" v-if="$store.state.user">
        <div style="width:100vw;height: 300px;position: relative;">
            <van-image
                round
                width="1.7rem"
                height="1.7rem"
                :src=userInfo.photo
                style=" margin: 60px 0px 0px 15px;border: 2px solid white;"
            />
            <div style="width: 123px;
                height: 29px;
                font-family: MicrosoftYaHei;
                font-size: 15px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 1px;
                margin: -53px 0px 0px 115px;
                color: #ffffff;">{{userInfo.name}}</div>
            <div style="margin: -30px 15px 0px 0px;float: right;">
                <van-button round size="mini" type="default" class="send-btn" native-type="button">
                    编辑资料
                </van-button>
            </div>
            <div class="beneath">
                <span>
                    <div>{{userInfo.art_count}}</div>
                    <div>头条</div>
                </span>
                <span>
                    <div>{{userInfo.follow_count}}</div>
                    <div>关注</div>
                </span>
                <span>
                    <div>{{userInfo.fans_count}}</div>
                    <div>粉丝</div>
                </span>
                <span>
                    <div>{{userInfo.like_count}}</div>
                    <div>获赞</div>
                </span>
            </div>
        </div>
       </div>
       <!-- /已登录头部 -->
       <!-- 未登录头部 -->
       <div class="wdl" v-else @click="$router.push('/login')"> 
            <div>
                <img src="../../assets/18171661423091_.pic.jpg" style="border-radius: 50%;width: 80px;height: 80px;">
            </div><br>
            <div style="font-size:16px;">登录 / 注册</div>
       </div>
       <!-- /未登录头部 -->
       <!-- 宫格导航 -->
        <van-grid class="grid-nav mb-9" :column-num="2" clickable>
            <van-grid-item class="grid-item" >
                <i slot="icon" class="iconfont sc-shoucang"></i>
                <span slot="text" class="text">收 藏</span>
            </van-grid-item>
            <van-grid-item class="grid-item" >
                <i slot="icon" class="iconfont sc-history"></i>
                <span slot="text" class="text">历 史</span>
            </van-grid-item>
        </van-grid>
       <!-- /宫格导航 -->
       <!-- 单元格 -->
        <van-cell title="消息通知" is-link />
        <van-cell class="mb-9" title="小诚同学" is-link />
        <div style="margin: 16px;">
             <van-button @click="tuichu" v-if="$store.state.user" block type="defult"  style="background-color: white; color:red;border: 0ch;">退出登录</van-button>
        </div>
       <!-- /单元格 -->
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
                <span>我的</span>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { getUserInfo } from '@/api/index.js'

export default {
  name: 'loginPage',
  components: {},
  data () {
    return {
        userInfo:{} //储存用户信息
    }
  },
  computed: {},
  watch: {},
  methods: {
     //退出登录事件
     tuichu () {
        this.$dialog.confirm({
            title: '确认退出吗？',
        })
        .then(() => {
        // 确认执行这里
        // 确认退出：清除登录状态（容器中的 user + 本地储存中的 user）
        this.$store.commit('setUser',null)
        })
        .catch(() => {
        // 取消执行这里
        // on cancel
        });
     },
     //加载用户信息
     async loadUserInfo () {
        try {
            const { data } = await getUserInfo()
            //用户信息请求成功存入userInfo中
            this.userInfo = data.data
            console.log(data);
        } catch (err) {
            console.log(err);
            this.$toast('获取数据失败')
        }
     }
  },
  created () {
    // 初始化的时候，如果用户登录了，才请求获取当前登录用户的信息
    if (this.$store.state.user) {
        this.loadUserInfo()
    }
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
    };
    .alredy-dl{
        flex-direction: row;
    }
    .alredy-dl,
    .wdl{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
	    height: 401px;
	    background:url('@/assets/18161661423085_.pic.jpg');
    };
    .wdl{
        flex-direction:column;
        color: white;
    }
    .send-btn{
        color: #666666;
        width: 116px;
	    height: 33px;
	    background-color: #ffffff;
	    border-radius: 16px;
        float: right;
        
    }
    .sc-shoucang{
	    color: #eb5253;
        font-size: 30px;
    };
    .sc-history{
        color: #ff9d1d;
        font-size: 35px;
    }
    .text{
	    font-size: 20px;
	    color: #333333;
    }
}

.beneath {
    display: flex;
    width: 100vw;
    height: 100px;
    position: absolute;
    align-items: center;
    text-align: center;
    top: 300px;
    span {
        width: 30vw;
        height: 30px;
        color: white;
        text-align: center;
        font-size: 25px;
    }
}
</style>