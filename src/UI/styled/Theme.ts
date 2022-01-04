import baseStyled, { ThemedStyledInterface } from "styled-components";

import { Color, colors } from "../../constants/colors";

const {
  DARK_MAIN,
  LIGHT_MAIN,

  DARK_CONTRAST,
  LIGHT_CONTRAST,

  DARK_TEXT,
  LIGHT_TEXT,

  DARK_MAIN_LIGHTEN,
  DARK_MAIN_DARKEN,

  LIGHT_MAIN_LIGHTEN,
  LIGHT_MAIN_DARKEN,
} = colors;

export interface Theme {
  main: Color;
  main_lighten: Color;
  main_darken: Color;
  text: Color;
  contrast: Color;
}

export const darkTheme: Theme = {
  main: DARK_MAIN,
  main_lighten: DARK_MAIN_LIGHTEN,
  main_darken: DARK_MAIN_DARKEN,
  text: DARK_TEXT,
  contrast: DARK_CONTRAST,
};

export const lightTheme: Theme = {
  main: LIGHT_MAIN,
  main_lighten: LIGHT_MAIN_LIGHTEN,
  main_darken: LIGHT_MAIN_DARKEN,
  text: LIGHT_TEXT,
  contrast: LIGHT_CONTRAST,
};

export const styled = baseStyled as ThemedStyledInterface<Theme>;
