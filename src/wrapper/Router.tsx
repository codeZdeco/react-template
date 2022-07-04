/**
 * >> Router - Route Provider
 * Control render route paths
 * Custom route of this application at /src/@cozde/config/route.ts
 */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { RouteProps, AuthProps } from "@types";
import React from "react";
import { LoadingScreen } from "components/commons";
import { useAppSelector } from "store";
import { RouteType } from "@enum";
import config from "@cozde/config";

const routeConfig = config.route;

interface PrivateRouteProps {
  auth?: AuthProps;
  alt?: string;
  children: React.ReactElement;
}

function PrivateRoute(props: PrivateRouteProps) {
  const { alt, children } = props;
  /** TODO: Modify this base on user information */
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
      {routeType === RouteType.Nested && nested?.map(renderRoute)}
    </Route>
  );
};

function CustomRouter() {
  const { default: defaultRoute } = useAppSelector((state) => state.app.route);

  return (
    <Router>
      <Routes>
        {/* Default route render */}
        <Route path="/" element={<Navigate to={defaultRoute} />} />
        {routeConfig.routes.map(renderRoute)}
      </Routes>
    </Router>
  );
}

export default CustomRouter;
