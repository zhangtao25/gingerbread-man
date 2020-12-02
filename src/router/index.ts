import {RouteConfig} from 'react-router-config';

import Home from "../views/Home";
import Test from '../views/Test'

const routes: RouteConfig[] = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/Test",
    component: Test
  },
];

export default routes;
