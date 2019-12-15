import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload';
import 'lib-flexible/flexible'

Vue.config.productionTip = false;
Vue.use(VueLazyLoad,{
  preLoad:1,
  error:require('./img/error.jpg'),
  loading:require('./img/succecc.gif')
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
