import Vue from 'nativescript-vue'
Vue.config.silent = false;

import Login from './components/Login'

new Vue({
  render: (h) => h('frame', [h(Login)]),
}).$start()
