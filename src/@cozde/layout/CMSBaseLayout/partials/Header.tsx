import {
  useTheme,
  Button,
  styled,
  Avatar,
  Typography,
  Icon,
  Stack,
  IconButton,
  TextField,
} from "@mui/material";

const AvatarButton = styled(Button)(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-transform: none;
    gap: ${theme.spacing(1)};
    border-radius: ${theme.spacing(2)};
    padding-left: ${theme.spacing(1)};
    padding-right: ${theme.spacing(1)};
  `,
);

const SearchField = styled(TextField)(
  ({ theme }) => `
    & .MuiOutlinedInput-root {
      border-radius: ${theme.spacing(2)};
      width: ${theme.spacing(40)};
    }
  `,
);

function Header() {
  const theme = useTheme();
  const avatarSize = theme.spacing(3);

  return (
    <Stack
      flexDirection='row'
      alignItems='center'
      justifyContent='space-between'
      sx={{
        height: theme.spacing(7),
        backgroundColor: "background.default",
        px: theme.spacing(2),
      }}
    >
      {/* Extensions */}
      <Stack direction='row'></Stack>
      <Stack direction='row'>
        <SearchField
          variant='outlined'
          size='small'
          placeholder='Search for anything'
        />
      </Stack>
      <Stack direction='row' gap={theme.spacing(2)}>
        <IconButton size='small'>
          <Icon color='primary'>notifications</Icon>
        </IconButton>
        <IconButton size='small'>
          <Icon color='primary'>forum</Icon>
        </IconButton>
        <AvatarButton variant='outlined'>
          <Avatar sx={{ width: avatarSize, height: avatarSize }}>H</Avatar>
          <Typography>John Doe</Typography>
          <Icon>expand_more</Icon>
        </AvatarButton>
      </Stack>
    </Stack>
  );
}

export default Header;
