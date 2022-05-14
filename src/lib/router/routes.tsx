import type { PathRouteProps } from "react-router-dom";

import Layout from "lib/layout";
import Home from "lib/pages/home";
import Login from "lib/pages/login";
import Test from "lib/pages/test";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/test",
    element: <Test />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
