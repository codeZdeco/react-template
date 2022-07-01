import { SharedComponentProps } from "@types";

const instance: SharedComponentProps = {
  alert: {
    active: true,
    option: {
      anchorOrigin: {
        horizontal: "right",
        vertical: "bottom",
      },
    },
  },
  bot: {
    active: true,
    option: {
      icon: "/icons/bot.png",
      anchorOrigin: {
        horizontal: "right",
        vertical: "bottom",
      },
    },
  },
  search: {
    active: true,
    option: {
      limit: 5,
    },
  },
  chat: {
    active: true,
    option: {
      headerMenu: true,
    },
  },
  notification: {
    active: true,
    option: {
      limit: 5 /** -1 for unlimited */,
    },
  },
};

export default instance;
