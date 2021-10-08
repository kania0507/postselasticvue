 
import Vue from "vue";
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router/index'
import Hello from './components/Hello.vue'
import Search from './components/Search.vue'
import Header from './components/Header.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
 
Vue.use(VueAxios, axios);

new Vue({
  el: '#app',
  router,
   
  template: '<App/>',
  components: {  Search, Hello, Header },
  render: h => h(App)
})
