import { MenuSettingProps } from "@types";

const instance: MenuSettingProps = {
  sidebar: [
    {
      label: "Dashboard",
      icon: null,
      url: "home",
      tooltip: "dashboard",
      position: "top",
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
