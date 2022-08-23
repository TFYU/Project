<template>
<div class='app'>
  <h1>赛诚app</h1>
  <!-- iconfint使用 -->
  <!-- 方法一：font-class -->
  <i class="iconfont sc-mima"></i>
  <!-- 方法二：编码方式 -->
  <i class="iconfont" style="color:pink">&#xe626;</i>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="info">信息按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
  <van-tabs v-model="active">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
  </van-tabs>
</div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  data () {
    return {
       active: 0,
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

</style>