import Circles from './components/Circles.vue';
import Lines from './components/Lines.vue';
import Lines2 from './components/Lines2.vue';
import Squares from './components/Squares.vue';
import CirclesSquares from './components/CirclesSquares.vue';
import Pattern1 from './components/Pattern1.vue';
import Pattern2 from './components/Pattern2.vue';
import Pattern3 from './components/Pattern3.vue';
import Pattern4p1 from './components/Pattern4-1.vue';
import Pattern4p2 from './components/Pattern4-2.vue';
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
import DotQueue from './components/DotQueue.vue';
import HundredGradients from './components/HundredGradients.vue';
import FourteenSegment from './components/FourteenSegment.vue';

export default [
  { path: '/', redirect: '/14-segment' },
  { meta: { title: 'circles', createdAt: '2019-11-26' }, path: '/circles', component: Circles },
  { meta: { title: 'lines', createdAt: '2019-11-26' }, path: '/lines', component: Lines },
  { meta: { title: 'lines2', createdAt: '2019-11-26' }, path: '/lines2', component: Lines2 },
  { meta: { title: 'squares', createdAt: '2019-11-26' }, path: '/squares', component: Squares },
  { meta: { title: 'circles-squares', createdAt: '2019-11-26' }, path: '/circles-squares', component: CirclesSquares },
  { path: '/pattern', redirect: '/pattern1' },
  { meta: { title: 'pattern1', createdAt: '2019-11-26' }, path: '/pattern1', component: Pattern1 },
  { meta: { title: 'pattern2', createdAt: '2019-11-26' }, path: '/pattern2', component: Pattern2 },
  { meta: { title: 'pattern3', createdAt: '2019-11-26' }, path: '/pattern3', component: Pattern3 },
  { meta: { title: 'pattern4.1', createdAt: '2021-02-07' }, path: '/pattern4_1', component: Pattern4p1 },
  { meta: { title: 'pattern4.2', createdAt: '2021-02-07' }, path: '/pattern4_2', component: Pattern4p2 },
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
  { meta: { title: 'dot-queue', createdAt: '2023-02-12' }, path: '/dot-queue', component: DotQueue },
  { meta: { title: '100-gradients', createdAt: '2023-05-01' }, path: '/100-gradients', component: HundredGradients },
  { meta: { title: '14-segment', createdAt: '2023-11-24' }, path: '/14-segment', component: FourteenSegment },
];
