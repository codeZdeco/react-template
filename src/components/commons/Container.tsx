import { Box, styled } from "@mui/material";

const ContainerBox = styled(Box)(
  ({ theme }) => `
  width: 100%;
  height: 100%;
  padding: ${theme.spacing(3)};
  display: flex;
  gap: ${theme.spacing(3)};
`,
);

export default ContainerBox;
