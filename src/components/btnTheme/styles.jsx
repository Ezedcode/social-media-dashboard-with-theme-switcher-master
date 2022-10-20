import styled, { keyframes } from "styled-components";

const LeftRight = keyframes`
  from {
    left: 60%;
  }
  
  to {
    margin-left: 5%;
  }
`;

const RightLeft = keyframes`
  from {
    margin-left: 5%;
  }
  
  to {
    margin-left: 60%;
  }
`;

export const Container = styled.div`
  display: flex;

  & .toggle {
    position: relative;
    width: 70px;
    height: 35px;
    border-radius: 17px;
    background-color: hsl(230, 22%, 74%);
    display: flex;
    align-items: center;
  }

  & .light {
  }

  & .dark {
  }

  & .circle {
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 17px;
    background-color: hsl(0, 0%, 100%);
  }

  & .light .circle {
    right: 0;
    animation: ${RightLeft} 0.2s !important;
  }

  & .dark .circle {
    left: 0;
    animation: ${LeftRight} 0.2s;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    justify-content: space-between;
  }
`;
//
