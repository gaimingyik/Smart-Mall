import { getCart, setCartCount, reveCartCounts } from '@/api/cart'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    setCartList (state, newList) {
      state.cartList = newList
    },
    toggleCheck (state, goodsId) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      goods.is_Checked = !goods.isChecked
    },
    setToggleAll (state, isAllChecked) {
      state.cartList.forEach(item => {
        item.isChecked = isAllChecked
      })
    }
  },
  actions: {
    async getCartAction (context) {
      const { data } = await getCart()
      data.list.forEach(item => {
        item.isChecked = true
      })
      context.commit('setCartList', data.list)
    },
    async changeCount (context, obj) {
      const res = await setCartCount(obj.goodsid, obj.value, obj.goodsskuid)
      context.dispatch('getCartAction')
      console.log(res)
    },
    async reveCount (context) {
      const selCartList = context.getters.selCarList
      const id = selCartList.map(item => item.id)
      const res = await reveCartCounts(id)
      console.log(res)
      context.dispatch('getCartAction')
      Toast('删除成功')
    }

  },
  getters: {
    cartTotal (state) {
      return state.cartList.reduce((sum, item) => sum + item.goods_num
        , 0)
    },
    selCarList (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    selCount (state, getters) {
      return getters.selCarList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    selPrice (state, getters) {
      return getters.selCarList.reduce((sum, item) => sum + item.goods_num * item.goods.goods_price_min, 0)
    },
    isAllChecked (state) {
      return state.cartList.every(item => item.isChecked)
    }
  }
}
