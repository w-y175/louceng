import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload';
import 'lib-flexible/flexible'
import {Swipe,SwipeItem,ImagePreview} from 'vant'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(Swipe).use(SwipeItem);
Vue.use(ImagePreview);
Vue.config.productionTip = false;
Vue.use(VueLazyLoad,{
  preLoad:1,
  error:require('./img/error.jpg'),
  loading:require('./img/succ.gif')
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
