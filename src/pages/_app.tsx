import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import AppTemplate from "../components/AppTemplate";
import GlobalStyles from "../styles/global";
import { darkTheme } from "../styles/themes/dark";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles /> 
      <AppTemplate>
        <Component {...pageProps} />
      </AppTemplate>
    </ThemeProvider>
  );
}
