import { Box, Divider } from "@mui/material";
import { Sidebar, Header, Content } from "./partials";
import { ThemeConfig } from "@cozde/config";

function Layout() {
  return (
    <Box className='h-screen w-full flex flex-row'>
      <Sidebar />
      {ThemeConfig.hasDivider && <Divider orientation='vertical' />}
      <Box className='grow flex flex-col'>
        <Header />
        {ThemeConfig.hasDivider && <Divider orientation='horizontal' />}
        <Content />
      </Box>
    </Box>
  );
}

export default Layout;
