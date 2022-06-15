import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { RouteProps, RoleProps } from "@types";
import React from "react";
import { LoadingScreen } from "components/commons";

interface PrivateRouteProps {
  auth?: Array<RoleProps>;
  alt?: string;
  children: React.ReactElement;
}

function PrivateRoute(props: PrivateRouteProps) {
  const { alt, children } = props;
  /** Modify this base on user information */
  const isAuth = true;

  return isAuth ? children : <Navigate to={alt ? alt : "/"} />;
}

const renderRoute = (route: RouteProps) => {
  const { type: routeType, path, element: Element, nested, auth, alt } = route;

  return (
    <Route
      key={path}
      path={path}
      element={
        <React.Suspense fallback={<LoadingScreen />}>
          <PrivateRoute auth={auth} alt={alt}>
            <Element />
          </PrivateRoute>
        </React.Suspense>
      }
    >
      {routeType === "nested" && nested?.map(renderRoute)}
    </Route>
  );
};

interface RouterProps {
  routes: Array<RouteProps>;
  default: string;
}

function CustomRouter(props: RouterProps) {
  const { default: defaultRoute, routes } = props;

  return (
    <Router>
      <Routes>
        {/* Default route render */}
        <Route path='/' element={<Navigate to={defaultRoute} />} />
        {routes.map(renderRoute)}
      </Routes>
    </Router>
  );
}

export default CustomRouter;
