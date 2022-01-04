import { styled } from "./Theme";
import { transition } from "../../constants/styleVariables";

export const GameItem = styled.div`
  position: relative;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.main_lighten};
  padding: 2rem;
  transition: ${transition};
  &:hover {
    box-shadow: 0 0 1rem 0 ${(props) => props.theme.main_darken};
  }
  &::before {
    position: absolute;
    content: "";
    display: block;
    background-color: ${(props) => props.theme.contrast};
    height: 0.1rem;
    width: 0;
    transition: ${transition};
    bottom: 0;
    left: 0;
  }
  &:hover::before {
    width: 100%;
  }
  & span {
    font-size: 3rem;
  }
`;
