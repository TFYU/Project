<template>
<div class='login-container'>
  <!-- 头部导航 -->
  <van-nav-bar class="page-nav-bar"
        title="登录"
  />
  <!-- /头部导航 -->
  <!-- 表单 -->
  <van-form @submit="onSubmit" ref="loginForm">
    <van-field
      v-model="user.mobile"
      name="mobile"
      placeholder="请输入手机号"
      :rules="userFormRules.mobile"
      maxlength="11"
    >
      <i slot='left-icon' class="iconfont sc-shouji"></i>
    </van-field>
    <van-field
      v-model="user.code"
      name="密码"
      placeholder="请输入验证码"
      :rules="userFormRules.code"
      maxlength="6"
    >
      <i slot='left-icon' class="iconfont sc-mima"></i>
    <template #button>
      <!-- 倒计时 -->
      <van-count-down
        v-if="isCountDownShow"
        slot="button"
        :time="1000 * 6"
        format="ss s"
        @finish="isCountDownShow = false"
      />
      <!-- /倒计时 -->
      <van-button round size="mini" type="default" class="send-btn" native-type="button" @click="onSendSms" style="color:#666666" v-else>获取短信验证码</van-button>
    </template>
    </van-field>
    <div style="margin: 16px;">
      <van-button block type="info" native-type="submit" style="background-color:#6EB4FB;border: 0ch;">登录</van-button>
    </div>
</van-form>
  <!-- /表单 -->
</div>
</template>

<script>
import { login,getSmsCode } from '@/api/index'
export default {
  name: 'loginPage',
  components: {},
  data () {
    return {
      user:{
        mobile:'',
        code: ''
      },
      userFormRules:{
        mobile:[{
          required: true,
          message: '手机号不能为空'
        },{
          pattern: /^1[3|4|5|7|8]\d{9}$/,
          message: '手机号格式错误'
        }],
        code:[{
          required: true,
          message: '验证码不能为空'
        },{
          pattern: /^\d{6}$/,
          message: '验证码格式错误'
        }]
      },
      isCountDownShow : false //控制倒计时显示隐藏
    }
  },
  computed: {},
  watch: {},
  methods: {
     async onSubmit () {
      //加载提示
      this.$toast.loading({
        duration: 0, //持续时间，0表示持续展示不停止
        message: '登录中...', //提示消息
        forbidClick: true, //是否背景点击
        loadingType: 'spinner' //加载图标类型
      })
      try {
        const {data} = await login(this.user)
        this.$store.commit('setUser',data.data)
        console.log('登录成功',data)
        this.$toast.success('登录成功')
        this.$router.push('/')
      } catch (err) {
        console.log(err);
        this.$toast.fail('登录失败，手机号或验证码错误')
      }
     },
     async onSendSms () {
        // 1.验证手机号
        console.log('onSendSms');
        try{
          await this.$refs.loginForm.validate('mobile')
        }catch (err) {

        }
        // 2.验证通过，显示倒计时
        this.isCountDownShow = true
        // 3.请求发送验证码
        try{
          await getSmsCode(this.user.mobile)
          this.$toast('发送成功')
        }catch (err) {
          // 失败不显示倒计时
          this.isCountDownShow = false
        }
     }
  },
  created () {

  },
  mounted () {
    
  }
}
</script>
<style scoped lang="less">
.login-container{
  .iconfont{
    font-size: 37px;
    color: #666666;
  }

  .send-btn{
    width: 156px;
    height: 46px;
    background-color: #ededed;
    border: 0ch;
  }

  .van-button__text{
    font-size: 20px !important;
  }
}
</style>