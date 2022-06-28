import { RouteProps } from "@types";
import { HomePage, Introduction, SnakeGame, TodoList } from "components/pages";
/**
 * WARNING: never set path as empty string or only slash string '/'
 * For forwarding to default initial page, using default props of Router wrapper
 */
const routes: Array<RouteProps> = [
  {
    path: "home",
    type: "nested",
    element: HomePage,
    auth: ["guest"],
    nested: [
      {
        path: "",
        type: "element",
        element: Introduction,
      },
      {
        path: "todo",
        type: "element",
        element: TodoList,
      },
      {
        path: "snake",
        type: "element",
        element: SnakeGame,
      },
    ],
  },
];

export default routes;
