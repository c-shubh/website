import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const defaultTheme = createTheme();
export const theme = createTheme({
  palette: {
    background: {
      default: grey[200],
    },
  },
  breakpoints: {
    values: {
      ...defaultTheme.breakpoints.values,
      mobile: 320,
      tablet: 768,
      laptop: 1024,
      desktop: 1440,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
