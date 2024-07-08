import Circles from '../components/Circles.astro'

export default [
  // TODO:
  // { path: '/', redirect: '/14-segment' },
  { params: { slug: '/circles' }, props: { title: 'circles', createdAt: '2019-11-26', component: Circles }},
  { params: { slug: '/lines' }, props: { title: 'lines', createdAt: '2019-11-26', component: "Lines" }},
  { params: { slug: '/lines2' }, props: { title: 'lines2', createdAt: '2019-11-26', component: "Lines2" }},
  { params: { slug: '/squares' }, props: { title: 'squares', createdAt: '2019-11-26', component: "Squares" }},
  { params: { slug: '/circles-squares' }, props: { title: 'circles-squares', createdAt: '2019-11-26', component: "CirclesSquares" }},
  // TODO:
  // { path: '/pattern', redirect: '/pattern1' },
  { params: { slug: '/pattern1' }, props: { title: 'pattern1', createdAt: '2019-11-26', component: "Pattern1" }},
  { params: { slug: '/pattern2' }, props: { title: 'pattern2', createdAt: '2019-11-26', component: "Pattern2" }},
  { params: { slug: '/pattern3' }, props: { title: 'pattern3', createdAt: '2019-11-26', component: "Pattern3" }},
  { params: { slug: '/pattern4_1' }, props: { title: 'pattern4.1', createdAt: '2021-02-07', component: "Pattern4p1" }},
  { params: { slug: '/pattern4_2' }, props: { title: 'pattern4.2', createdAt: '2021-02-07', component: "Pattern4p2" }},
  { params: { slug: '/triangles' }, props: { title: 'triangles', createdAt: '2019-11-26', component: "Triangles" }},
  { params: { slug: '/triangles2' }, props: { title: 'triangles2', createdAt: '2019-11-26', component: "Triangles2" }},
  { params: { slug: '/eyes' }, props: { title: 'eyes', createdAt: '2019-11-26', component: "Eyes" }},
  { params: { slug: '/flower' }, props: { title: 'flower', createdAt: '2019-11-26', component: "Flower" }},
  { params: { slug: '/sierpinski-triangle' }, props: { title: 'sierpinski-triangle', createdAt: '2019-12-10', component: "SierpinskiTriangle" }},
  { params: { slug: '/hex' }, props: { title: 'hex', createdAt: '2020-02-22', component: "Hex" }},
  { params: { slug: '/hexes' }, props: { title: 'hexes', createdAt: '2020-02-22', component: "Hexes" }},
  { params: { slug: '/beads' }, props: { title: 'beads', createdAt: '2020-02-22', component: "Beads" }},
  { params: { slug: '/plaid' }, props: { title: 'plaid', createdAt: '2020-04-19', component: "Plaid" }},
  { params: { slug: '/cassette' }, props: { title: 'cassette', createdAt: '2020-05-01', component: "Cassette" }},
  { params: { slug: '/dot-queue' }, props: { title: 'dot-queue', createdAt: '2023-02-12', component: "DotQueue" }},
  { params: { slug: '/100-gradients' }, props: { title: '100-gradients', createdAt: '2023-05-01', component: "HundredGradients" }},
  { params: { slug: '/14-segment' }, props: { title: '14-segment', createdAt: '2023-11-24', component: "FourteenSegment" }},
];
