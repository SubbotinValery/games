import { darken, lighten } from "polished";

const DARK_MAIN = "#1c1c1c";
const LIGHT_MAIN = "#f0f0f0";

const DARK_CONTRAST = "#f0f0f0";
const LIGHT_CONTRAST = "#1c1c1c";

const LIGHT_TEXT = "#000";
const DARK_TEXT = "#fff";

const DISABLED = "#bfbfbf";

const toneRatio = 0.1;

const DARK_MAIN_LIGHTEN = lighten(toneRatio, DARK_MAIN);
const DARK_MAIN_DARKEN = darken(toneRatio, DARK_MAIN);

const LIGHT_MAIN_LIGHTEN = lighten(toneRatio, LIGHT_MAIN);
const LIGHT_MAIN_DARKEN = darken(toneRatio, LIGHT_MAIN);

export const colors = {
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

  DISABLED,
} as const;

export type ColorName = keyof typeof colors;
export type Color = typeof colors[ColorName];
