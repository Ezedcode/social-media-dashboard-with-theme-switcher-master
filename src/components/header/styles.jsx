import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 15rem;
  border-radius: 0 0 30px 30px;
  box-shadow: 0px 0px 5px #0000002b;

  & > div {
    width: 80%;
    padding-top: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  p {
    font-weight: bolder;
  }

  & hr {
    display: none;
  }

  @media only screen and (max-width: 1182px) {
    & > div {
      width: 90%;
      flex-direction: column;
    }

    & hr {
      display: block;
      margin-top: 30px;
      margin-bottom: 20px;
      border: 1px solid gray;
    }
  }
`;
