import React from "react";
import AuthProps from "./Auth";

export type RouteType = "element" | "nested";

interface RouteProps {
  /** Type of route, boundary or element */
  type: RouteType;
  /** Path to element */
  path: string;
  /** Alternate path when failing authentication */
  alt?: string;
  /** React component for rendering */
  element?: React.ReactComponentElement;
  /** Allowed auth roles */
  auth?: AuthProps;
  /** type=nested only => nested routes */
  nested?: Array<Route>;
}

export default RouteProps;
