import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import vueBem from '@verstaerker/vue-bem';
Vue.use(vueBem);

new Vue({
  render: h => h(App)
}).$mount('#app')
