<template>
    <div class='home-container'>
        <!-- 头部导航 -->
        <van-nav-bar class="page-nav-bar">
            <van-button 
            class="search-btn"
            round 
            type="info"
            size="small"
            slot="title"
            icon="search"
            >搜索</van-button>
        </van-nav-bar>
        <!-- /头部导航 -->
        <!-- 频道列表 -->
        <van-tabs class='tab-container' v-model="active">
            <van-tab 
            :title = "channel.name"
            v-for = "channel in channels"
            :key = 'channel.id'
            >
                <!-- 文章列表 -->
                <ArticleList :channel="channel"></ArticleList>
                <!-- /文章列表 -->
            </van-tab>
            <div slot="nav-right" class="placeholder"></div>
            <div slot="nav-right" class="hb-btn">
                <i class="iconfont sc-gengduo"></i>
            </div>
        </van-tabs>
        <!-- /频道列表 -->
    </div>
</template>

<script>
import { getUserChannels } from '@/api/index.js'
import ArticleList from './components/article-list.vue'

export default {
  name: 'homePage',
  components: {
    ArticleList
},
  data () {
    return {
        active:0,
        channels:[] //储存频道信息
    }
  },
  computed: {},
  watch: {},
  methods: {
        async loadChannels () {
            try {
                const { data } = await getUserChannels()
                console.log(data);
                this.channels = data.data.channels
            } catch (err) {
                console.log(err);
            }
        }
  },
  created () {
        this.loadChannels ()
  },
  mounted () {
    
  }
}
</script>
<style scoped lang="less">
.home-container {
    /deep/.van-nav-bar__title {
        max-width: 100%;
        .search-btn{
        width: 555px;
        height: 64px;
        background-color: #5babfb;
        border-radius: 56px;
        border: none;
        }
        .van-icon{
            color: #fff;
            font-size: 32px;
        }
    }
    /deep/.tab-container {
        .van-tab {
            border-right: 1px solid #edeff3;
            min-width: 200px;
            font-size: 30px;
            color: #777777;
        }
        .van-tabs__line {
            bottom: 0.5rem;
            width: 31px;
            height: 6px;
            background-color: #3296fa;
            border-radius: 3px;
        }
        .hb-btn {
            position: fixed;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 66px;
            height: 82px;
            background-color: #fff;
            opacity: 0.9;
            i.iconfont {
                font-size: 36px;
            }
        }
        .placeholder {
            flex-shrink: 0;
            width: 66px;
            height: 82px;
        }
    }
    
}
</style>