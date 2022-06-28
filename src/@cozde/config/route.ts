import { RouteSettingProps } from "@types";
import { RouteType } from "@enum";
import { HomePage, Introduction, TodoList, SnakeGame } from "components/pages";

const instance: RouteSettingProps = {
  default: "home",
  routes: [
    {
      path: "home",
      type: RouteType.Nested,
      element: HomePage,
      auth: ["guest"],
      nested: [
        {
          path: "",
          type: RouteType.Element,
          element: Introduction,
        },
        {
          path: "todo",
          type: RouteType.Element,
          element: TodoList,
        },
        {
          path: "snake",
          type: RouteType.Element,
          element: SnakeGame,
        },
      ],
    },
  ],
};

export default instance;
