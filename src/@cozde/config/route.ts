import { RouteSettingProps } from "@types";
import { RouteType } from "@enum";
import { HomePage, Introduction } from "components/pages";

export const paths: { [path: string]: string } = {
  home: "home",
  feed: "feeds",
  user: "users",
  setting: "setting",
};

const instance: RouteSettingProps = {
  default: "home",
  routes: [
    {
      path: paths.home,
      type: RouteType.Nested,
      element: HomePage,
      auth: [
        { role: "guest", group: "development" },
        { role: "guest", group: "marketing" },
      ],
      nested: [
        {
          path: "",
          type: RouteType.Element,
          element: Introduction,
        },
      ],
    },
  ],
};

export default instance;
