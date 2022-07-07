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
import React, { useMemo } from "react";
import { LoadingScreen } from "components/commons";
import { NotFoundPage } from "components/pages";
import { useAppSelector } from "store";
import { RouteType } from "@enum";
import { RouteConfig } from "@cozde/config";
import { AuthUtils } from "utils";

const DEFAULT_ALT_ROUTE = "/";

interface PrivateRouteProps {
  auth?: AuthProps;
  alt?: string;
  children: React.ReactElement;
}

function PrivateRoute(props: PrivateRouteProps) {
  const { alt, children, auth } = props;
  const { information: userInformation } = useAppSelector(
    (state) => state.auth.profile,
  );

  const isAuth = useMemo<boolean>(() => {
    if (auth && userInformation?.auth) {
      return AuthUtils.checkMatchedAuth(auth, userInformation?.auth);
    }

    return true;
  }, [auth, userInformation?.auth]);

  return isAuth ? children : <Navigate to={alt ? alt : DEFAULT_ALT_ROUTE} />;
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
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  );
};

function CustomRouter() {
  const { default: defaultRoute } = useAppSelector((state) => state.app.route);

  return (
    <Router>
      <Routes>
        {/* Default route render */}
        <Route path='/' element={<Navigate to={defaultRoute} />} />
        {RouteConfig.routes.map(renderRoute)}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default CustomRouter;
