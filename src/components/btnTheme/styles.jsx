import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  & .toggle {
    width: 70px;
    height: 35px;
    border-radius: 17px;
    background-color: hsl(230, 22%, 74%);
    display: flex;
    align-items: center;
    justify-content: right;
  }

  & .circle {
    width: 25px;
    height: 25px;
    margin: 0 5px;
    border-radius: 17px;
    background-color: hsl(0, 0%, 100%);
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    justify-content: space-between;
  }
`;
