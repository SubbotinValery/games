import { styled } from "./Theme";
import { transition } from "../../constants/styleVariables";
import { colors } from "../../constants/colors";

export const ThemeBtn = styled.button<{ active: Boolean }>`
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
