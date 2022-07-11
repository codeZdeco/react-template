import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function Content() {
  return (
    <Box
      className='grow overflow-auto relative'
      sx={{ backgroundColor: "background.default" }}
    >
      <Box className='top-0 left-0 overflow-auto absolute w-full h-full'>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Content;
