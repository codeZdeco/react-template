import { Theme } from "@mui/material";
import React from "react";
import RouteProps from "./Route";
import AuthProps from "./Auth";

export interface ThemeSettingProps {
  /**
   * Default theme styles
   */
  default: string;
  /**
   * Available theme collection
   */
  collections: {
    [themeKey: string]: Theme;
  };
}

export interface RouteSettingProps {
  /**
   * Initial route
   */
  default: string;
  /**
   * Available routes
   */
  routes: Array<RouteProps>;
}

interface MenuSettingItemProps {
  label: string;
  icon: React.ReactComponentElement;
  url: string;
  tooltip?: string;
  auth?: AuthProps;
}

interface MenuSidebarSettingItemProps extends MenuSettingItemProps {
  position: "top" | "center" | "bottom";
}

export interface MenuSettingProps {
  sidebar: Array<MenuSidebarSettingItemProps>;
  header: {
    /**
     * Open profile Menu at top-right screen
     */
    profile: Array<MenuSettingItemProps>;
    /**
     * Extensions at left-side header
     */
    extension: Array<MenuSettingItemProps>;
  };
}

export interface SharedComponentProps {
  alert: {
    active: boolean;
    option?: {
      anchorOrigin?: {
        horizontal?: "left" | "center" | "right";
        vertical?: "top" | "bottom";
      };
    };
  };
  bot: {
    active: boolean;
    option?: {
      icon?: string;
      anchorOrigin?: {
        horizontal?: "left" | "center" | "right";
        vertical?: "top" | "bottom";
      };
    };
  };
  search: {
    active: boolean;
    option?: {
      limit?: number /** -1 for unlimited */;
    };
  };
  chat: {
    active: boolean;
    option?: {
      headerMenu?: boolean;
    };
  };
  notification: {
    active: boolean;
    option?: {
      limit?: number /** -1 for unlimited */;
    };
  };
}

interface AppSettingProps {
  theme: ThemeSettingProps;
  route: RouteSettingProps;
  menu: MenuSettingProps;
  shared: SharedComponentProps;
}

export default AppSettingProps;
