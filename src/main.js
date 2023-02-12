import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';

Vue.use(VueRouter);
Vue.config.productionTip = false;
const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  router,
  render: f => f(App),
}).$mount('#app');
