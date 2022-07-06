import clsx from "clsx";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MenuSidebarSettingItemProps } from "@types";
import { MenuConfig, ThemeConfig } from "@cozde/config";
import {
  Stack,
  Box,
  Divider,
  useTheme,
  Button,
  Icon,
  Tooltip,
  styled,
} from "@mui/material";

function Logo() {
  const theme = useTheme();
  /** TODO: Add logo png here */
  return <Box sx={{ height: theme.spacing(7) }}></Box>;
}

const SidebarMenuButton = styled(Button)(
  ({ theme }) => `
  width: 100%;
  border-radius: 0;
  height: ${theme.spacing(8)};
  & .cover {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${theme.spacing(5)};
    width: ${theme.spacing(5)};
    border-radius: ${theme.spacing(1)};

    &.active {
      background-color: ${theme.palette.primary.main};

      & .material-icons {
        color: ${theme.palette.common.white};
      }
    }
  }
`,
);

interface SidebarMenuItemProps extends MenuSidebarSettingItemProps {
  active: boolean;
}

function SidebarMenuItem(props: SidebarMenuItemProps) {
  const navigate = useNavigate();
  const { icon, url, tooltip, active } = props;

  const handleRedirect = () => navigate(url);

  return (
    <Tooltip title={tooltip || ""} placement='right'>
      <SidebarMenuButton onClick={handleRedirect}>
        <Box className={clsx("cover", active && "active")}>
          <Icon>{icon}</Icon>
        </Box>
      </SidebarMenuButton>
    </Tooltip>
  );
}

function Sidebar() {
  const menuItems = MenuConfig.sidebar;

  const [topItems, centerItems, botItems] = (function () {
    const top: MenuSidebarSettingItemProps[] = [],
      center: MenuSidebarSettingItemProps[] = [],
      bottom: MenuSidebarSettingItemProps[] = [];

    menuItems.map((item) => {
      switch (item.position) {
        case "top":
          top.push(item);
          break;
        case "center":
          center.push(item);
          break;
        case "bottom":
          bottom.push(item);
          break;
        default:
          break;
      }
      return item;
    });

    return [top, center, bottom];
  })();

  const renderSidebarMenuItem = useCallback(
    (item: MenuSidebarSettingItemProps) => {
      return (
        <SidebarMenuItem
          key={item.label}
          {...item}
          active={"home" === item.url}
        />
      );
    },
    [],
  );

  return (
    <Stack
      className='w-20'
      sx={{
        backgroundColor: "background.paper",
      }}
      flexDirection='column'
      // alignItems='center'
      divider={ThemeConfig.hasDivider && <Divider variant='middle' />}
    >
      <Logo />
      <Stack
        className='grow'
        flexDirection='column'
        justifyContent='space-between'
      >
        {/* Top Applications */}
        <Box className='flex flex-col items-center'>
          {topItems.map(renderSidebarMenuItem)}
        </Box>
        {/* Center Applications */}
        <Box className='flex flex-col items-center'>
          {centerItems.map(renderSidebarMenuItem)}
        </Box>
        {/* Bottom Applications */}
        <Box className='flex flex-col items-center'>
          {botItems.map(renderSidebarMenuItem)}
        </Box>
      </Stack>
    </Stack>
  );
}

export default Sidebar;
