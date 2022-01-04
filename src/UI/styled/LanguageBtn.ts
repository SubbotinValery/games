import { styled } from "./Theme";
import { transition } from "../../constants/styleVariables";
import { colors } from "../../constants/colors";

export const LanguageBtn = styled.button<{ active: Boolean }>`
  cursor: ${(props) => !props.active && "pointer"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  border: none;
  outline: none;
  background-color: transparent;
  &:last-child {
    margin-right: 0;
  }
  &:focus {
    border: none;
    outline: none;
  }
  & span {
    position: relative;
    color: ${(props) => (props.active ? props.theme.text : colors.DISABLED)};
    text-transform: uppercase;
    font-size: 1.5rem;
    transition: ${transition};
  }
  & span::after {
    position: absolute;
    content: "";
    display: block;
    background-color: ${(props) => props.theme.contrast};
    height: 0.1rem;
    width: 0;
    bottom: -15%;
    left: 0;
    transition: ${transition};
  }
  &:hover span {
    color: ${(props) => !props.active && props.theme.text};
  }
  &:hover span::after {
    width: ${(props) => !props.active && "100%"};
  }
`;
