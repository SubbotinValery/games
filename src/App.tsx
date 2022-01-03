import React from "react";
import { ThemeProvider } from "styled-components";

import { useAppSelector } from "./hooks/redux";
import { GlobalStyles } from "./UI/styled/GlobalStyles";
import Dashboard from "./components/Dashboard";

export const App = () => {
  const { theme } = useAppSelector((state) => state.themeReducer);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
};
