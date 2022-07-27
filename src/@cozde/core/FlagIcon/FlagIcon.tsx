import { SvgIconProps, SvgIcon } from '@mui/material';
import Flags from './flags';

interface FlagIconProps extends SvgIconProps {
  code: 'en' | 'vi' | 'de';
}

function FlagIcon(props: FlagIconProps) {
  const { code } = props;

  const Component = Flags[code];

  return <Component {...props} />;
}

export default FlagIcon;
