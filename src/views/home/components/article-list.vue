<template>
    <div class="article-list-container">
        <van-pull-refresh 
        v-model="isreFreshLoading" 
        @refresh="onRefresh"
        :success-text="refreshSuccessText"
        :success-duration="1500">
            <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
                <!-- <van-cell 
                v-for = "(article,index) in list"
                :key = "index" 
                :title = "article.title"
                /> -->
                <ArticleItem
                v-for = "(article,index) in list"
                :key = "index" 
                :article = "article"
                ></ArticleItem>
            </van-list>
        </van-pull-refresh>
    </div>
</template>
<router-view></router-view>
<script>
import { getUserArticles } from '@/api/index.js'
import ArticleItem from './article-item.vue';

export default {
    name: "articlePage",
    props: {
        channel: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            timestamp: null,
            isreFreshLoading: false,
            refreshSuccessText: "刷新成功" // 下拉刷新成功提示文本
        };
    },
    mounted() {
    },
    methods: {
        async onLoad() {
            // 1.请求获取数据
            try {
                const { data } = await getUserArticles({
                    channel_id: this.channel.id,
                    timestamp: this.timestamp || Date.now(),
                    with_top: 1
                });
                console.log(data);
                // 2.把请求的数据放到list数组中
                const { results } = data.data;
                this.list.push(...results);
                // 3.本次数据加载结束之后要把加载状态设置为结束
                this.loading = false;
                // 4.判断数据加载完成
                if (results.length) {
                    this.timestamp = data.data.pre_timestamp;
                }
                else {
                    this.finished = true;
                }
            }
            catch (err) {
                console.log(err);
                this.loading = false;
                this.finished = true;
            }
        },
        async onRefresh() {
            // 1.请求获取数据
            try {
                const { data } = await getUserArticles({
                    channel_id: this.channel.id,
                    timestamp: Date.now(),
                    with_top: 1
                });
                console.log(data);
                // 2.把请求的数据追加到列表的顶部
                const { results } = data.data;
                this.list.unshift(...results);
                // 3.本次数据加载结束之后要把加载状态设置为结束
                this.isreFreshLoading = false;
                // 4.提示成功
                this.refreshSuccessText = `刷新成功，更新了${results.length}条数据`;
            }
            catch (err) {
                console.log(err);
                this.refreshSuccessText = "刷新失败";
                this.isreFreshLoading = false;
            }
        }
    },
    components: { ArticleItem }
};
</script>

<style lang="less" scoped>
.article-list-container {
    position: fixed;
    top: 180px;
    bottom: 100px;
    overflow-y: auto;
    right: 0;
    left: 0;
}
</style>