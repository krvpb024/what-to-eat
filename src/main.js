import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueScrollLock from 'vue-scroll-lock'

Vue.config.productionTip = false
Vue.use(VueScrollLock)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
