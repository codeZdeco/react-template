import { RouteSettingProps } from "@types";
import { RouteType } from "@enum";
import { HomePage, ErrorPage } from "components/pages";
import CMSBaseLayout from "@cozde/layout/CMSBaseLayout";

const NotFoundPage = ErrorPage[404];

export const paths: { [path: string]: string } = {
  home: "home",
  dashboard: "dashboard",
  feed: "feeds",
  user: "users",
  setting: "setting",
};

const instance: RouteSettingProps = {
  default: "/home" /** Must be different from '/' */,
  routes: [
    {
      path: paths.home,
      type: RouteType.Nested,
      element: CMSBaseLayout,
      auth: [
        { role: "guest", group: "development" },
        { role: "guest", group: "marketing" },
      ],
      nested: [
        { path: paths.dashboard, type: RouteType.Element, element: HomePage },
        { path: "*", type: RouteType.Element, element: NotFoundPage },
      ],
    },
  ],
};

export default instance;
