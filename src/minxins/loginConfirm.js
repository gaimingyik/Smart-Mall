export default {
  methods: {
    loginConfirm () {
      if (!this.$store.getters.token) {
        this.$dialog.confirm({
          title: '提示',
          message: '你还没登录哦，要去登录吗'
        })
          .then(() => {
            this.$router.replace({
              path: '/login',
              query: {
                backUrl: this.$route.fullPath
              }
            })
          })
          .catch(() => {
          })
        return true
      }
      return false
    }
  }
}
