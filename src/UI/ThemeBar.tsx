import React from "react";
import { styled } from "./Theme";
import { FiMoon, FiSun } from "react-icons/fi";

import { ThemeType, changeTheme } from "../redux/reducers/ThemeSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { colors } from "../constants/colors";
import { transition } from "../constants/styleVariables";

const ThemeBtn = styled.button<{ active: Boolean }>`
  cursor: ${(props) => !props.active && "pointer"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.active ? props.theme.contrast : "transparent"};
  border-radius: 50%;
  margin-right: 1.5rem;
  padding: 1rem;
  border: none;
  outline: none;
  transition: ${transition};
  &:last-child {
    margin-right: 0;
  }
  &:focus {
    border: none;
    outline: none;
  }
  &:hover {
    background-color: ${(props) =>
      props.active ? props.theme.contrast : colors.DISABLED};
  }

  & svg {
    color: ${(props) =>
      props.active ? props.theme.main : props.theme.contrast};
    width: 2rem;
    height: 2rem;
    transition: ${transition};
  }
  &:hover svg {
    color: ${(props) => props.theme.main};
  }
`;

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
