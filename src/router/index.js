import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Goods from '@/views/goods'
import Mypage from '@/views/mypage'
import OrderForm from '@/views/orderForm'
import Home from '@/views/mypage/home.vue'
import Cart from '@/views/mypage/cart.vue'
import Class from '@/views/mypage/classification.vue'
import User from '@/views/mypage/user.vue'
import Payment from '@/views/payment'
import store from '@/store'
import Search from '@/views/search'
import SearchList from '@/views/search/list.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/goods/:id',
    component: Goods
  },
  {
    path: '/',
    redirect: '/home',
    component: Mypage,
    children: [{
      path: '/home',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/class',
      component: Class
    },
    {
      path: '/user',
      component: User
    }

    ]
  },
  {
    path: '/orderForm',
    component: OrderForm
  },
  {
    path: '/payment',
    component: Payment
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/list',
    component: SearchList
  }
]

const router = new VueRouter({
  routes
})

const vip = ['/payment', '/orderForm']
router.beforeEach((to, from, next) => {
  if (!vip.includes(to.path)) {
    next()
    return
  }
  const res = store.getters.token
  if (res) {
    next()
  } else {
    next('/login')
  }
})
export default router
