import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import IndexDefault from "../components/IndexDefault";
import sun from "../components/sun"
import Music from "../components/Music";
import line from "../components/line";
import pie from "../components/pie";
import RichText from "../components/RichText";
import Sunburst from "../components/Sunburst";
import PictorialBar from "../components/PictorialBar";
import Gauge from "../components/Gauge";
import Globe3d from "../components/Globe3d";
import city3d from "../components/city3d";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "Home",
    // component: Home
    redirect: "/Home"
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    children: [
      {
        //进来默认的组件是
        path: '',
        name: 'index',
        component: IndexDefault
      },
      {
        path: '/sun',
        name: 'sun',
        component: sun
      },
      {
        path: '/line',
        name: 'line',
        component: line
      },
      {
        path: '/pie',
        name: 'pie',
        component: pie
      },
      {
        path: '/RichText',
        name: 'RichText',
        component: RichText
      },
      {
        path: '/Sunburst',
        name: 'Sunburst',
        component: Sunburst
      },
      {
        path: '/pictorialBar',
        name: 'PictorialBar',
        component: PictorialBar
      },
      {
        path: '/Gauge',
        name: 'Gauge',
        component: Gauge
      },
      {
        path: '/city3d',
        name: 'city3d',
        component: city3d
      },
      {
        path: '/Globe3d',
        name: 'Globe3d',
        component: Globe3d
      },
      {
        path: '/Music',
        name: 'Music',
        component: Music
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
