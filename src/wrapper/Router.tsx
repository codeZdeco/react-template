/**
 * >> Router - Route Provider
 * Control render route paths
 * Custom route of this application at /src/@cozde/config/route.ts
 */
import _ from "@lodash";
import {
  BrowserRouter as Router,
  Navigate,
  useRoutes,
  RouteObject,
} from "react-router-dom";
import { RouteProps, AuthProps } from "@types";
import React, { useMemo } from "react";
import { LoadingScreen } from "components/commons";
import { useAppSelector } from "store";
import { RouteType } from "@enum";
import { RouteConfig } from "@cozde/config";
import { AuthUtils } from "utils";
import { NotFoundPage } from "components/pages";

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

function Routes() {
  const { default: defaultRoute } = useAppSelector((state) => state.app.route);

  // Redirect 404 not found route
  const notFoundRoute: RouteProps = {
    type: RouteType.Element,
    path: "*",
    index: false,
    element: <NotFoundPage />,
  };

  // Default first route for redirecting
  const initRoute: RouteProps = {
    type: RouteType.Element,
    path: "/",
    index: true,
    element: <Navigate to={defaultRoute} />,
  };

  const mapRoute = (route: RouteProps): RouteObject => {
    const { children, auth, alt, element, index, path } = route;
    const isParent = !!children;

    const isAuth = !!auth && auth.length !== 0;

    // Map from custom props into react router v6 props
    isParent &&
      (function () {
        _.set(route, "children", children.map(mapRoute));
      })();

    // Return RouteObject props
    return {
      path,
      index: index ? index : path === defaultRoute,
      element: (
        <React.Suspense fallback={<LoadingScreen />}>
          {isAuth ? (
            <PrivateRoute auth={auth} alt={alt}>
              {element}
            </PrivateRoute>
          ) : (
            element
          )}
        </React.Suspense>
      ),
      children: isParent ? [...children, notFoundRoute] : undefined,
    };
  };

  const routes: Array<RouteObject> = RouteConfig.routes.map(mapRoute);

  const elements = useRoutes([initRoute, ...routes, notFoundRoute]);

  return (
    <React.Suspense fallback={<LoadingScreen />}>{elements}</React.Suspense>
  );
}

function CustomRouter() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default CustomRouter;
