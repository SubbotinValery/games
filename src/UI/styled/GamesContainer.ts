import { styled } from "./Theme";

export const GamesContainer = styled.div`
  background-color: ${(props) => props.theme.main_lighten};
  padding: 2.5rem;
  border-radius: 3rem;

  & h1 {
    position: relative;
    text-transform: uppercase;
    margin: 3rem 0;
  }
  & h1::before {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 0.1rem;
    bottom: -25%;
    left: 0;
    background-color: ${(props) => props.theme.text};
  }

  & > div {
    display: inline-flex;
    flex-wrap: wrap;
    & > div {
      margin: 0.5rem;
    }
  }
`;
