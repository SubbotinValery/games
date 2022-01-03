import baseStyled, { ThemedStyledInterface } from "styled-components";

import { Color, colors } from "../../constants/colors";

const { DARK_MAIN, LIGHT_MAIN, DARK_CONTRAST, LIGHT_CONTRAST, BLACK, WHITE } =
  colors;

export interface Theme {
  main: Color;
  text: Color;
  contrast: Color;
}

export const darkTheme: Theme = {
  main: DARK_MAIN,
  text: WHITE,
  contrast: DARK_CONTRAST,
};

export const lightTheme: Theme = {
  main: LIGHT_MAIN,
  text: BLACK,
  contrast: LIGHT_CONTRAST,
};

export const styled = baseStyled as ThemedStyledInterface<Theme>;
