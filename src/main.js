import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Circles from './components/Circles.vue';
import Lines from './components/Lines.vue';
import Lines2 from './components/Lines2.vue';
import Squares from './components/Squares.vue';
import CirclesSquares from './components/CirclesSquares.vue';
import Pattern from './components/Pattern.vue';
import Pattern2 from './components/Pattern2.vue';
import Pattern3 from './components/Pattern3.vue';
import Triangles from './components/Triangles.vue';
import Triangles2 from './components/Triangles2.vue';
import Eyes from './components/Eyes.vue';
import Flower from './components/Flower.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: '/', redirect: '/triangles' },
  { path: '/circles', component: Circles },
  { path: '/lines', component: Lines },
  { path: '/lines2', component: Lines2 },
  { path: '/squares', component: Squares },
  { path: '/circlessquares', component: CirclesSquares },
  { path: '/pattern', component: Pattern },
  { path: '/pattern2', component: Pattern2 },
  { path: '/pattern3', component: Pattern3 },
  { path: '/triangles', component: Triangles },
  { path: '/triangles2', component: Triangles2 },
  { path: '/eyes', component: Eyes },
  { path: '/flower', component: Flower },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  router,
  render: f => f(App),
}).$mount('#app');
