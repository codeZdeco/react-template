import { RouteProps } from "@types";
import { HomePage } from "components/pages";
/**
 * WARNING: never set path as empty string or only slash string '/'
 * For forwarding to default initial page, using default props of Router wrapper
 */
const routes: Array<RouteProps> = [
  {
    path: "home",
    type: "element",
    element: HomePage,
    exact: true,
    auth: ["guest"],
  },
];

export default routes;
