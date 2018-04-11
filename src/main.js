// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//icon-font
import SvgIcon from '@/components/svg-icon'
import FontIcon from '@/components/font-icon.vue';
import VueLazyload from 'vue-lazyload';
import '@/assets/css/iconfont.css'
import '@/assets/lib/iconfont.js'

Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
Vue.config.productionTip = false
Vue.component('SvgIcon', SvgIcon);
Vue.component('FontIcon', FontIcon);
window.eventAllData = new Vue();
window.eventBottomData = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
