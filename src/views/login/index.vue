<template>
  <div class="login">
    <van-nav-bar title="会员登录" left-arrow @click-left="$router.go(-1)" />
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input class="inp" maxlength="11" placeholder="请输入手机号码" type="text" v-model="mobile">
        </div>
        <div class="form-item">
          <input v-model="picCode" class="inp" maxlength="5" placeholder="请输入图形验证码" type="text">
          <img v-if="picUrl" :src="picUrl" @click="picGet" alt="">
        </div>
        <div class="form-item">
          <input class="inp" placeholder="请输入短信验证码" type="text" @click="validFn ()" v-model="smsCode">
          <button @click="getCode()">{{ total===current?'获取验证码':current+ '秒后重新发送' }}</button>
        </div>
      </div>

      <div class="login-btn" @click="login()">登录</div>
    </div>
  </div>
</template>

<script>
import { picGea, getMsg, getSms } from '@/api/login'

export default {
  name: 'LoginPage',
  data () {
    return {
      picCode: '',
      pickey: '',
      picUrl: '',
      total: 60,
      current: 60,
      timerId: null,
      mobile: '',
      smsCode: ''
    }
  },
  created () {
    this.picGet()
  },
  destroyed () {
    clearInterval(this.timerId)
  },
  methods: {
    async picGet () {
      const { data: { base64, key } } = await picGea()
      this.picUrl = base64
      this.pickey = key
    },
    async getCode () {
      if (!this.validFn()) {
        return
      }
      if (!this.timerId) {
        const res = await getMsg(this.picCode, this.pickey, this.mobile)
        console.log(res)
        this.timerId = setInterval(() => {
          this.current--
          if (this.current <= 0) {
            this.current = 60
            clearTimeout(this.timerId)
            this.timerId = null
          }
        }, 1000)
      }
    },
    validFn () {
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.$toast('请输入正确的手机号')
        return false
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        this.$toast('请输入正确的图形验证码')
        return false
      }
      return true
    },
    async login () {
      if (!this.validFn()) {
        return
      }
      if (!/^\d{6}$/.test(this.smsCode)) {
        this.$toast('请输入正确的手机验证码')
        return
      }
      const res = await getSms(this.mobile, this.smsCode)
      console.log(res.data)
      this.$store.commit('User/setUserInfo', res.data)
      this.$toast('登录成功')
      const url = this.$route.query.backUrl || '/'
      this.$router.replace(url)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 49px 29px;

  .title {
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
      font-weight: normal;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  .form-item {
    border-bottom: 1px solid #f3f1f2;
    padding: 8px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    .inp {
      display: block;
      border: none;
      outline: none;
      height: 32px;
      font-size: 14px;
      flex: 1;
    }
    img {
      width: 94px;
      height: 31px;
    }
    button {
      height: 31px;
      border: none;
      font-size: 13px;
      color: #cea26a;
      background-color: transparent;
      padding-right: 9px;
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg,#ecb53c,#ff9211);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

  <style>

  </style>
