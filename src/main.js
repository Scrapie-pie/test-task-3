import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import VueMask from 'v-mask'
import vueBem from '@verstaerker/vue-bem';

Vue.use(vueBem);
Vue.use(VueMask);

new Vue({
  render: h => h(App)
}).$mount('#app')
