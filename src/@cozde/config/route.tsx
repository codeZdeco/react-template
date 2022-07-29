import { RouteSettingProps } from "@types";
import { RouteType } from "@enum";
import CMSBaseLayout from "@cozde/layout/CMSBaseLayout";
import { HomePage, FeedPage, UtilPage, ProductPage } from "components/pages";

export const paths: { [path: string]: string } = {
  home: "home",
  dashboard: "dashboard",
  feed: "feed",
  utils: "utils",
  user: "users",
  setting: "setting",
  profile: "profile",
  user_setting: "user/setting",
  product: "utils/product",
  customer: "utils/customer",
};

const instance: RouteSettingProps = {
  default: "/home/dashboard" /** Must be different from '/' */,
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
          element: <FeedPage />,
        },
        {
          path: paths.utils,
          type: RouteType.Nested,
          element: <UtilPage />,
          children: [
            {
              path: paths.product,
              type: RouteType.Element,
              element: <ProductPage />,
              index: true,
            },
            {
              path: paths.customer,
              type: RouteType.Element,
              element: <>customer</>,
            }
          ]
        },
      ],
    },
  ],
};

export default instance;
