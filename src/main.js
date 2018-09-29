import Vue from 'vue'
import App from './App.vue' 
import router from './router'
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Rentals from './components/Rentals.vue'
import Services from './components/Services.vue'

Vue.component('v-header', Header)
Vue.component('v-home', Home)
Vue.component('v-rentals', Rentals)
Vue.component('v-services', Services)

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
