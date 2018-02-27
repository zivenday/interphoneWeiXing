///<reference path="components/index.js"/>
/*
 The Vue build version to load with the `import` command
 (runtime-only or standalone) has been set in webpack.base.conf with an alias.
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import RElems from './components/index.js'



Vue.config.productionTip = false;
Vue.use(RElems);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
