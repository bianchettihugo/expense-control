import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/light-theme";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />

    </ThemeProvider>
  )
}

