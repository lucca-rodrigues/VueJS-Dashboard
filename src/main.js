import Vue from 'vue'
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import Login from './pages/login';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Chakra)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/teste', component: Login}
  ]
})

new Vue({
  router,
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount('#app')
