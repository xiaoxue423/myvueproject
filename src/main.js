import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Logo from "@/components/Logo"
import Nav from "@/components/Nav"
import Layout from "@/components/Layout";

Vue.config.productionTip = false

Vue.component('Logo',Logo)
Vue.component('Nav',Nav)
Vue.component('Layout',Layout)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
