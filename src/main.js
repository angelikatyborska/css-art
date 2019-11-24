import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Circles1 from './components/Circles1.vue';
import Squares1 from './components/Squares1.vue';
import CirclesSquares1 from './components/CirclesSquares1.vue';
import Pattern1 from './components/Pattern1.vue';
import Pattern2 from './components/Pattern2.vue';
import Triangles1 from './components/Triangles1.vue';
import Triangles2 from './components/Triangles2.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: '/circles1', component: Circles1 },
  { path: '/squares1', component: Squares1 },
  { path: '/circlessquares1', component: CirclesSquares1 },
  { path: '/pattern1', component: Pattern1 },
  { path: '/pattern2', component: Pattern2 },
  { path: '/triangles1', component: Triangles1 },
  { path: '/triangles2', component: Triangles2 },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  router,
  render: f => f(App),
}).$mount('#app');
