import { MenuSettingProps } from "@types";

const instance: MenuSettingProps = {
  sidebar: [
    {
      label: "Dashboard",
      icon: null,
      url: "home",
      tooltip: "Dashboard",
      position: "top",
    },
    {
      label: "Feeds",
      icon: null,
      url: "feed",
      tooltip: "New feeds",
      position: "center",
    },
    {
      label: "Utilities",
      icon: null,
      url: "utils",
      tooltip: "Utilities",
      position: "center",
    },
    {
      label: "Users",
      icon: null,
      url: "users",
      tooltip: "Users",
      position: "center",
    },
    {
      label: "Configuration",
      icon: null,
      url: "configs",
      tooltip: "Configuration",
      position: "bottom",
    },
  ],
  header: {
    profile: [
      {
        label: "Profile",
        icon: null,
        url: "profile",
      },
      {
        label: "Setting",
        icon: null,
        url: "setting",
      },
    ],
    extension: [],
  },
};

export default instance;
