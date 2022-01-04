import React from "react";
import { ThemeProvider } from "styled-components";

import { useAppSelector } from "./hooks/redux";
import { GlobalStyles } from "./UI/styled/GlobalStyles";
import { Header } from "./UI/containers/Header";
import { Container } from "./UI/styled/Container";
import { Router } from "./components/Router";

export const App = () => {
  const { theme } = useAppSelector((state) => state.themeReducer);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <Router />
      </Container>
    </ThemeProvider>
  );
};
