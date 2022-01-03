import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "../../UI/styled/Theme";
import type { Theme } from "../../UI/styled/Theme";

export enum ThemeType {
  light = "LIGHT_THEME",
  dark = "DARK_THEME",
}

const initialState: { theme: Theme; type: ThemeType } = {
  theme: lightTheme,
  type: ThemeType.light,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeType>) {
      if (state.type !== action.payload) {
        switch (action.payload) {
          case ThemeType.light:
            state.theme = lightTheme;
            break;
          case ThemeType.dark:
            state.theme = darkTheme;
            break;
        }
        state.type = action.payload;
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
