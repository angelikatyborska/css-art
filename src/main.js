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
import SierpinskiTriangle from './components/SierpinskiTriangle.vue';
import Hex from './components/Hex.vue';
import Hexes from './components/Hexes.vue';
import Beads from './components/Beads.vue';
import Plaid from './components/Plaid.vue';
import Cassette from './components/Cassette.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: '/', redirect: '/triangles' },
  { meta: { title: 'circles', createdAt: '2019-11-26' }, path: '/circles', component: Circles },
  { meta: { title: 'lines', createdAt: '2019-11-26' }, path: '/lines', component: Lines },
  { meta: { title: 'lines2', createdAt: '2019-11-26' }, path: '/lines2', component: Lines2 },
  { meta: { title: 'squares', createdAt: '2019-11-26' }, path: '/squares', component: Squares },
  { meta: { title: 'circles-squares', createdAt: '2019-11-26' }, path: '/circles-squares', component: CirclesSquares },
  { meta: { title: 'pattern', createdAt: '2019-11-26' }, path: '/pattern', component: Pattern },
  { meta: { title: 'pattern2', createdAt: '2019-11-26' }, path: '/pattern2', component: Pattern2 },
  { meta: { title: 'pattern3', createdAt: '2019-11-26' }, path: '/pattern3', component: Pattern3 },
  { meta: { title: 'triangles', createdAt: '2019-11-26' }, path: '/triangles', component: Triangles },
  { meta: { title: 'triangles2', createdAt: '2019-11-26' }, path: '/triangles2', component: Triangles2 },
  { meta: { title: 'eyes', createdAt: '2019-11-26' }, path: '/eyes', component: Eyes },
  { meta: { title: 'flower', createdAt: '2019-11-26' }, path: '/flower', component: Flower },
  { meta: { title: 'sierpinski-triangle', createdAt: '2019-12-10' }, path: '/sierpinski-triangle', component: SierpinskiTriangle },
  { meta: { title: 'hex', createdAt: '2020-02-22' }, path: '/hex', component: Hex },
  { meta: { title: 'hexes', createdAt: '2020-02-22' }, path: '/hexes', component: Hexes },
  { meta: { title: 'beads', createdAt: '2020-02-22' }, path: '/beads', component: Beads },
  { meta: { title: 'plaid', createdAt: '2020-04-19' }, path: '/plaid', component: Plaid },
  { meta: { title: 'cassette', createdAt: '2020-05-01' }, path: '/cassette', component: Cassette },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  router,
  render: f => f(App),
}).$mount('#app');
