import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //Vuex
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(toast)
//添加事件总线对象
Vue.prototype.$bus = new Vue()
//解决移动端300ms的问题
FastClick.attach(document.body)
Vue.use(VueLazyload)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
