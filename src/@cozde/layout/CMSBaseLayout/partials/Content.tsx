import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function Content() {
  return (
    <Box className='grow' sx={{ backgroundColor: "background.default" }}>
      <Outlet />
    </Box>
  );
}

export default Content;
