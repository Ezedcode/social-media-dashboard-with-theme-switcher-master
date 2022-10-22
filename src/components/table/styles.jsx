import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  top: -6rem;
  width: 80%;
  margin: 0 auto;

  & .state {
    font-weight: bolder;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }

  & > div > div {
    margin-bottom: 1.5rem;
  }

  & > h2 {
    padding: 20px;
  }

  @media only screen and (max-width: 1182px) {
    & > div {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width: 1182px) {
    top: -3rem;
    width: 90%;
  }

  @media only screen and (max-width: 720px) {
    & > div {
      grid-template-columns: auto;
    }
  }
`;
