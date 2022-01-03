import React from "react";
import { ThemeProvider } from "styled-components";

import { useAppSelector } from "./hooks/redux";
import { GlobalStyles } from "./UI/GlobalStyles";
import Dashboard from "./Dashboard";

export const App = () => {
  const { theme } = useAppSelector((state) => state.themeReducer);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
};
