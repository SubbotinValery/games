import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import { ThemeType, changeTheme } from "../../redux/reducers/ThemeSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ThemeBtn } from "../styled/ThemeBtn";

export const ThemeBar = () => {
  const dispatch = useAppDispatch();
  const themeType = useAppSelector((state) => state.themeReducer.type);

  const onChangeTheme = (type: ThemeType) => {
    dispatch(changeTheme(type));
  };

  return (
    <div>
      <ThemeBtn
        active={themeType === ThemeType.light}
        onClick={() => onChangeTheme(ThemeType.light)}
      >
        <FiSun />
      </ThemeBtn>
      <ThemeBtn
        active={themeType === ThemeType.dark}
        onClick={() => onChangeTheme(ThemeType.dark)}
      >
        <FiMoon />
      </ThemeBtn>
    </div>
  );
};
