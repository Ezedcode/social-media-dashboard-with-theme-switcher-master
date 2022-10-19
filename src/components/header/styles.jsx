import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & hr {
    display: none;
  }

  @media only screen and (max-width: 375px) {
    flex-direction: column;

    & hr {
      display: block;
    }
  }
`;
