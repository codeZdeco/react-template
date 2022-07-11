import AuthProps from "./Auth";
import { RouteType as RouteEnum } from "@enum";
import { RouteObject } from "react-router-dom";

export type RouteType = RouteEnum.Element | RouteEnum.Nested;

interface RouteProps extends RouteObject {
  /** Type of route, nested or element */
  type: RouteType;
  /** Alternate path when failing authentication */
  alt?: string;
  /** Allowed auth roles */
  auth?: AuthProps;
  element: JSX.Element;
  children?: Array<RouteProps>;
}

export default RouteProps;
