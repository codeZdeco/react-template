import { ButtonProps, styled, Button, Icon } from "@mui/material";

export interface HashTagButtonProps extends ButtonProps {
  icon?: string;
}

const HashTagButton = styled((props: HashTagButtonProps) => (
  <Button {...props} startIcon={<Icon>{props.icon}</Icon>} variant='outlined' />
))(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  text-transform: none;
`,
);

export default HashTagButton;
