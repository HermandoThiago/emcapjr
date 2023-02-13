import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import emailjs from "@emailjs/browser";
import { GlobalStyle } from "./styles/global";
import { Router } from "./router";
import { defaultTheme } from "./styles/themes/default";

function App() {
  emailjs.init("eXklahBMM8minPRVT");

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
