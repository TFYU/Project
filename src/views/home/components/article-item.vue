<template>
   <van-cell class='article-item-container'>
        <div slot="title" class="title">{{ article.title }}</div>
        <div slot="label">
            <div class="cover-wrap" v-if="article.cover.type === 3">
                <div class="cover-item" v-for="(img,index) in article.cover.images" :key= "index">
                <van-image class="img-justify" fit="cover" :src="img"/>   
                </div>
            </div>
            <div class="label-info-warp">
                <span>{{article.aut_name}}</span>&nbsp;&nbsp;
                <span>{{article.comm_count}}评论</span>&nbsp;&nbsp;
                <span>{{article.pubdate | relativeTime}}</span>
            </div>
        </div>
        <van-image
        class="van-img"
        slot="default"
        v-if = "article.cover.type === 1"
        fit = "cover"
        :src = "article.cover.images[0]"
        />
   </van-cell>
</template>
    
<script>
    
    export default {
    name: 'articleItem',
    components: {},
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    data() {
    return {
    
    }
    },
    computed: {},
    watch: {},
    methods: {
    
    },
    created() {
    
    },
    mounted() {
    
    },
    }
</script>
<style scoped lang="less">
    .article-item-container {
      justify-content: center;
      align-items: center;
      color: "#3a3a3a";
      font-size: 16px;
      .van-cell__value {
        flex:unset;
        width: 232px;
        height: 146px; 
      }
      /deep/.van-image__img {
        display: flex;
      }
      /deep/.cover-wrap {
        display: flex;
        .cover-item {
          display: unset;
          .img-justify {
            flex: 1;
            margin: 20px 0 20px 0;
            width: 232px;
            height: 146px;
          }
        }
      }
      /deep/ .van-img{
        size: 20px;
      }
   } 
</style>