import Vue from 'vue'
import App from './App'
import store from './store/vuex-simple_store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
