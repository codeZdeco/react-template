import React from "react";
import RouteProps from "./Route";

export interface ThemeSettingProps {
  /**
   * Default theme styles
   */
  default: string;
  /**
   * Available theme collection
   */
  collections: Array<string>;
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
  active: {
    /**
     * Allow use internal dialog
     */
    dialog: boolean;
    /**
     * Allow use internal toast
     */
    alert: boolean;
    /**
     * Allow searching available routes of application
     */
    search: boolean;
    /**
     * Allow record and log notification
     */
    notification: boolean;
    /**
     * Allow chat messenger
     */
    chat: boolean;
    /**
     * Allow bot support
     */
    bot: boolean;
  };
}

interface AppSettingProps {
  theme: ThemeSettingProps;
  route: RouteSettingProps;
  menu: MenuSettingProps;
  shared: SharedComponentProps;
}

export default AppSettingProps;
