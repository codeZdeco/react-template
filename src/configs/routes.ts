import { RouteProps } from "@types";
import { HomePage, Introduction, TodoList } from "components/pages";
/**
 * WARNING: never set path as empty string or only slash string '/'
 * For forwarding to default initial page, using default props of Router wrapper
 */
const routes: Array<RouteProps> = [
  {
    path: "home",
    type: "nested",
    element: HomePage,
    exact: true,
    auth: ["guest"],
    nested: [
      {
        path: "",
        type: "element",
        element: Introduction,
        exact: true,
      },
      {
        path: "todo",
        type: "element",
        element: TodoList,
        exact: true,
      },
    ],
  },
];

export default routes;
