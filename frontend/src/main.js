import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from 'axios'

Vue.config.productionTip = false;

// Загружаем токен из LocalStorage
Vue.prototype.$http = axios;
const token = localStorage.getItem('token');

// Если есть токен

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");