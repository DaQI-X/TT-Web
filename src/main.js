import Vue from 'vue'
import App from './App.vue'
// 导入路由模块
import router from './router'
// 导入 vuex 模块
import store from './store'
// 导入 vantUI 
import Vant from 'vant'
// 引入 vant 样式
import 'vant/lib/index.css'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
