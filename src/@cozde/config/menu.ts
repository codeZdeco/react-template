import { MenuSettingProps } from "@types";

const instance: MenuSettingProps = {
  sidebar: [
    {
      label: "Dashboard",
      icon: "dashboard",
      url: "home",
      tooltip: "Dashboard",
      position: "top",
    },
    {
      label: "Feeds",
      icon: "chat",
      url: "feed",
      tooltip: "New feeds",
      position: "center",
    },
    {
      label: "Utilities",
      icon: "construction",
      url: "utils",
      tooltip: "Utilities",
      position: "center",
    },
    {
      label: "Users",
      icon: "group",
      url: "users",
      tooltip: "Users",
      position: "center",
    },
    {
      label: "Configuration",
      icon: "settings",
      url: "configs",
      tooltip: "Configuration",
      position: "bottom",
    },
  ],
  header: {
    profile: [
      {
        label: "Profile",
        icon: "star",
        url: "profile",
      },
      {
        label: "Setting",
        icon: "star",
        url: "setting",
      },
    ],
    extension: [],
  },
};

export default instance;
