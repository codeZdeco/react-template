import { MenuSettingProps } from "@types";
import { paths } from "./route";

const instance: MenuSettingProps = {
  sidebar: [
    {
      label: "Dashboard",
      icon: "dashboard",
      url: paths.dashboard,
      tooltip: "Dashboard",
      position: "top",
    },
    {
      label: "Feeds",
      icon: "chat",
      url: paths.feed,
      tooltip: "New feeds",
      position: "center",
    },
    {
      label: "Utilities",
      icon: "construction",
      url: paths.utils,
      tooltip: "Utilities",
      position: "center",
    },
    {
      label: "Users",
      icon: "group",
      url: paths.user,
      tooltip: "Users",
      position: "center",
    },
    {
      label: "Configuration",
      icon: "settings",
      url: paths.setting,
      tooltip: "Configuration",
      position: "bottom",
    },
  ],
  header: {
    profile: [
      {
        label: "Profile",
        icon: "star",
        url: paths.profile,
      },
      {
        label: "Setting",
        icon: "star",
        url: paths.user_setting,
      },
    ],
    extension: [],
  },
};

export default instance;
