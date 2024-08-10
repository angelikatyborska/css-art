import Circles from "./components/Circles.astro";
import Beads from "./components/Beads.astro";
import Cassette from "./components/Cassette.astro";
import CirclesSquares from "./components/CirclesSquares.astro";
import DotQueue from "./components/DotQueue.astro";
import Eyes from "./components/Eyes.astro";
import Flower from "./components/Flower.astro";
import FourteenSegment from "./components/FourteenSegment.astro";
import Hex from "./components/Hex.astro";
import Hexes from "./components/Hexes.astro";
import HundredGradients from "./components/HundredGradients.astro";
import Lines from "./components/Lines.astro";
import Lines2 from "./components/Lines2.astro";
import Pattern1 from "./components/Pattern1.astro";
import Pattern2 from "./components/Pattern2.astro";
import Pattern3 from "./components/Pattern3.astro";
import Pattern4p1 from "./components/Pattern4-1.astro";
import Pattern4p2 from "./components/Pattern4-2.astro";
import Plaid from "./components/Plaid.astro";
import SierpinskiTriangle from "./components/SierpinskiTriangle.astro";
import Squares from "./components/Squares.astro";
import Triangles from "./components/Triangles.astro";
import Triangles2 from "./components/Triangles2.astro";
import EmergencyExit from "./components/EmergencyExit.astro";

const rootRedirect = "emergency-exit";

export type Route = {
  params: {
    slug: string | undefined;
  };
  props: {
    title: string;
    createdOn: string;
    component: object;
  };
};

let routes: Route[] = [
  {
    params: { slug: "circles" },
    props: { title: "circles", createdOn: "2019-11-26", component: Circles },
  },
  {
    params: { slug: "lines" },
    props: { title: "lines", createdOn: "2019-11-26", component: Lines },
  },
  {
    params: { slug: "lines2" },
    props: { title: "lines2", createdOn: "2019-11-26", component: Lines2 },
  },
  {
    params: { slug: "squares" },
    props: { title: "squares", createdOn: "2019-11-26", component: Squares },
  },
  {
    params: { slug: "circles-squares" },
    props: { title: "circles-squares", createdOn: "2019-11-26", component: CirclesSquares },
  },
  {
    params: { slug: "pattern1" },
    props: { title: "pattern1", createdOn: "2019-11-26", component: Pattern1 },
  },
  {
    params: { slug: "pattern2" },
    props: { title: "pattern2", createdOn: "2019-11-26", component: Pattern2 },
  },
  {
    params: { slug: "pattern3" },
    props: { title: "pattern3", createdOn: "2019-11-26", component: Pattern3 },
  },
  {
    params: { slug: "pattern4_1" },
    props: { title: "pattern4.1", createdOn: "2021-02-07", component: Pattern4p1 },
  },
  {
    params: { slug: "pattern4_2" },
    props: { title: "pattern4.2", createdOn: "2021-02-07", component: Pattern4p2 },
  },
  {
    params: { slug: "triangles" },
    props: { title: "triangles", createdOn: "2019-11-26", component: Triangles },
  },
  {
    params: { slug: "triangles2" },
    props: { title: "triangles2", createdOn: "2019-11-26", component: Triangles2 },
  },
  { params: { slug: "eyes" }, props: { title: "eyes", createdOn: "2019-11-26", component: Eyes } },
  {
    params: { slug: "flower" },
    props: { title: "flower", createdOn: "2019-11-26", component: Flower },
  },
  {
    params: { slug: "sierpinski-triangle" },
    props: { title: "sierpinski-triangle", createdOn: "2019-12-10", component: SierpinskiTriangle },
  },
  { params: { slug: "hex" }, props: { title: "hex", createdOn: "2020-02-22", component: Hex } },
  {
    params: { slug: "hexes" },
    props: { title: "hexes", createdOn: "2020-02-22", component: Hexes },
  },
  {
    params: { slug: "beads" },
    props: { title: "beads", createdOn: "2020-02-22", component: Beads },
  },
  {
    params: { slug: "plaid" },
    props: { title: "plaid", createdOn: "2020-04-19", component: Plaid },
  },
  {
    params: { slug: "cassette" },
    props: { title: "cassette", createdOn: "2020-05-01", component: Cassette },
  },
  {
    params: { slug: "dot-queue" },
    props: { title: "dot-queue", createdOn: "2023-02-12", component: DotQueue },
  },
  {
    params: { slug: "100-gradients" },
    props: { title: "100-gradients", createdOn: "2023-05-01", component: HundredGradients },
  },
  {
    params: { slug: "14-segment" },
    props: { title: "14-segment", createdOn: "2023-11-24", component: FourteenSegment },
  },
  {
    params: { slug: "emergency-exit" },
    props: { title: "emergency-exit", createdOn: "2024-08-10", component: EmergencyExit },
  },
];

const rootRoute = routes.find((r) => r.params.slug === rootRedirect)!;

routes = [...routes, { ...rootRoute, params: { slug: undefined } }];

export default routes;
export { rootRoute };
