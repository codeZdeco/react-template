import { RouteSettingProps } from "@types";
import { RouteType } from "@enum";
import Introduction from "components/pages/Introduction";
import CMSBaseLayout from "@cozde/layout/CMSBaseLayout";
import { HomePage } from "components/pages";

export const paths: { [path: string]: string } = {
  home: "home",
  dashboard: "dashboard",
  feed: "feed",
  user: "users",
  setting: "setting",
};

const instance: RouteSettingProps = {
  default: "/home" /** Must be different from '/' */,
  routes: [
    {
      path: paths.home,
      type: RouteType.Nested,
      element: <CMSBaseLayout />,
      auth: [
        { role: "guest", group: "development" },
        { role: "guest", group: "marketing" },
      ],
      children: [
        {
          path: paths.dashboard,
          type: RouteType.Element,
          element: <HomePage />,
        },
        {
          path: paths.feed,
          type: RouteType.Element,
          element: <Introduction />,
        },
      ],
    },
  ],
};

export default instance;
