import { getInfo, setInfo } from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
      userInfo: getInfo()
    }
  },
  mutations: {
    setUserInfo (state, ojb) {
      state.userInfo = ojb
      setInfo(ojb)
    }
  },
  actions: {},
  getters: {}
}
