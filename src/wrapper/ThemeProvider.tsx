/**
 * >> ThemeProvider
 * Control custom MUI component, theme colors
 * Add new theme at /src/@cozde/theme
 * Default theme at /src/@cozde/config/theme.ts
 */
import { Theme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { useAppSelector } from "store";
import config from "@cozde/config";
import { useMemo } from "react";

const { collections } = config.theme;

interface ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;
  const { selected } = useAppSelector((state) => state.app.theme);

  const selectedTheme = useMemo<Theme>(() => collections[selected], [selected]);

  return <MuiThemeProvider theme={selectedTheme}>{children}</MuiThemeProvider>;
}

export default ThemeProvider;
