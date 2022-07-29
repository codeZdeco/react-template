import { Container } from 'components/commons';
import { Link, Outlet } from 'react-router-dom';
import { paths } from '@cozde/config/route';
import { Box, useTheme } from '@mui/material';

function UtilPage() {
  const theme = useTheme();

  return <Container className='flex flex-row'>
    <Box className='flex flex-col items-center gap-2 w-fit items-center justify-center'>
      <Box className='h-fit flex flex-col gap-2 py-2 px-4' sx={{
        backgroundColor: 'background.paper',
        borderRadius: theme.spacing(2),
        border: `1px solid ${theme.palette.divider}`,
        color: 'text.primary',
      }}>
        <Link to={paths.product}>product</Link>
        <Link to={paths.customer}>customer</Link>
      </Box>
    </Box>
    <Box className='grow'>
      <Outlet />
    </Box>
  </Container>
}

export default UtilPage;
