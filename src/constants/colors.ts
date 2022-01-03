export const colors = {
  DARK_MAIN: "#1c1c1c",
  LIGHT_MAIN: "#f0f0f0",
  DARK_CONTRAST: "#f0f0f0",
  LIGHT_CONTRAST: "#1c1c1c",
  WHITE: "#fff",
  BLACK: "#000",
  DISABLED: "#bfbfbf",
} as const;

export type ColorName = keyof typeof colors;
export type Color = typeof colors[ColorName];
