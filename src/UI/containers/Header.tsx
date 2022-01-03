import React from "react";

import { HeaderContainer } from "../styled/HeaderContainer";
import { ThemeBar } from "./ThemeBar";
import { LanguageBar } from "./LanguageBar";

export const Header = () => {
  return (
    <HeaderContainer>
      <LanguageBar />
      <ThemeBar />
    </HeaderContainer>
  );
};
