import { styled } from "./Theme";
import { transition } from "../../constants/styleVariables";

export const GameItem = styled.div`
  cursor: pointer;
  padding: 2rem;
  border: ${(props) => `0.1rem solid ${props.theme.contrast}`};
  border-radius: 2.5rem;
  transition: ${transition};
  &:hover {
    box-shadow: 0.5rem 0.5rem 1rem 0 ${(props) => props.theme.main_darken};
  }
  & span {
    font-size: 3rem;
  }
`;
