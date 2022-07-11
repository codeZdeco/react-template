import { ThemeConfig } from "@cozde/config";
import { Box, styled } from "@mui/material";

const SectionBox = styled(Box)(
  ({ theme }) => `
    border-radius: ${theme.spacing(1)};
    background-color: ${theme.palette.background.paper};
    border: ${
      ThemeConfig.hasDivider ? `1px solid ${theme.palette.divider}` : "none"
    };
  `,
);

export default SectionBox;
