<template>
    <div>
      <router-view></router-view>
      <van-tabbar route>
  <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
  <van-tabbar-item icon="apps-o" to="/class">分类页</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
  <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
</van-tabbar></div>
  </template>

<script>
export default {
  name: 'MYPAGE'
}
</script>

  <style>

  </style>
