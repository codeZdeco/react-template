import { ThemeProvider as MuiThemeProvider } from "@mui/material";

interface ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;

  return <MuiThemeProvider theme={}>{children}</MuiThemeProvider>;
}

export default ThemeProvider;
