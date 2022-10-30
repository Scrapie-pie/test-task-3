import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import VueMask from 'v-mask'

import vueBem from '@verstaerker/vue-bem';

Vue.use(vueBem);
// Prefered: as a plugin (directive + filter) + custom placeholders support

Vue.use(VueMask);
//import routes from './routes';

//Vue.use(VueRouter);

// Vue.config.productionTip = false;
//  const router = new VueRouter({
//    routes,
//    mode: "history",
//  });

new Vue({
  //router,
  render: h => h(App)
}).$mount('#app')
