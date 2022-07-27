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
  Autocomplete,
} from "@mui/material";
import { FlagIcon, AdPropper } from '@cozde/core';
import { ThemeConfig } from "@cozde/config";

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
    & .MuiInput-root, .MuiOutlinedInput-root {
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
      {/* <Stack direction='row'></Stack> */}
      <Stack direction='row'>
        <Autocomplete
          options={[]}
          size='small'
          renderInput={(params) => (
            <SearchField
              variant={ThemeConfig.hasDivider ? "outlined" : "standard"}
              placeholder='Search for anything'
              {...params}
            />
          )}
          popupIcon={<Icon>search</Icon>}
        />
      </Stack>
      <Stack direction='row' gap={theme.spacing(2)}>
        <IconButton size='small'>
          <Icon color='primary'>notifications</Icon>
        </IconButton>
        <IconButton size='small'>
          <Icon color='primary'>forum</Icon>
        </IconButton>
        <AdPropper popup={<>hello</>}>
          <IconButton size='small'>
            <FlagIcon code='de' />
          </IconButton>
        </AdPropper>
        <AvatarButton variant={ThemeConfig.hasDivider ? "outlined" : "text"}>
          <Avatar sx={{ width: avatarSize, height: avatarSize }}>H</Avatar>
          <Typography>John Doe</Typography>
          <Icon>expand_more</Icon>
        </AvatarButton>
      </Stack>
    </Stack>
  );
}

export default Header;
