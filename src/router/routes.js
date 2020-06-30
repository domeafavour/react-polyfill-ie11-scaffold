import BasicLayout from './../layouts/BasicLayout';
import Home from './../pages/Home';
import NotFound from './../pages/404';

export default [
  {
    path: '/404',
    component: NotFound,
  },
  {
    path: '/',
    component: BasicLayout,
    routes: [
      {
        path: '/home',
        component: Home,
      },
      {
        redirect: '/home',
      },
    ],
  },
];