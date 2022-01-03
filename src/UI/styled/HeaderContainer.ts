import { styled } from "./Theme";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 3rem 0;
  & > div {
    margin-right: 3rem;
  }
  & > div:last-child {
    margin-right: 0;
  }
`;
