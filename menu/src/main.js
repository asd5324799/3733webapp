// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);

import Home from './pages/home.vue'
import Flexible from 'lib-flexible'
import Reset from '../static/css/reset.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Home/>',
  components: { Home }
})
