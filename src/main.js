// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

// import 'lib-flexible'
import './assets/scss/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import vuexI18n from 'vuex-i18n'

Vue.use(ElementUI)
Vue.use(vuexI18n.plugin, store)
Vue.i18n.set('zh-CN')

Vue.config.productionTip = false
Vue.prototype.axios = axios

// 引入mockjs
// require('./mock.js');
import './mock.js'

router.beforeEach((to, from, next) => {
  if (to.meta.title) {//判断是否有标题
    document.title = to.meta.title
  }
  next() // 确保一定要调用 next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
