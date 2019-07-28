import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 声明数据
    count: 10
  },
  mutations: {
    // 设置数据
    fn (state, pyload) {
      pyload = 20
      console.log('执行')
      state.count = pyload
    }
  },
  actions: {
    // fn2 (context) {
    //   setInterval(() => {
    //     const NewCont = 20
    //     context.commit('fn', NewCont)
    //   }, 2000)
    // }
  }
})
