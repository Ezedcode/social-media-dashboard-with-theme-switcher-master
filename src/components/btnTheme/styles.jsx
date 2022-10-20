import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  & p {
    padding-right: 10px;
  }

  & .light label {
    background-color: hsl(230, 22%, 74%);
  }

  & .dark label {
    background: linear-gradient(
      to right,
      hsl(210, 78%, 56%),
      hsl(146, 68%, 55%)
    );
  }

  & .light label:before {
    transform: translateX(22px);
    background-color: hsl(0, 0%, 100%);
  }

  & .dark label:before {
    background-color: hsl(232, 19%, 15%);
  }

  & label {
    display: block;
    position: relative;
    width: 57px;
    height: 32px;
    border-radius: 1rem;
  }

  & label:before {
    display: block;
    position: absolute;
    top: 3.5px;
    content: "";
    width: 25px;
    height: 25px;
    margin-left: 5px;
    border-radius: 1rem;
    transition: transform 0.3s ease;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const BodyColorIn = createGlobalStyle`
  body {
    color: hsl(0, 0%, 100%);
    background-color: hsl(230, 17%, 14%);
    transition: background-color .5s linear;
  }

  header {
    background-color: hsl(232, 19%, 15%);
    transition: background-color .5s linear;
  }

  .card{
    background-color: hsl(228, 28%, 20%);
  }
`;

export const BodyColorOut = createGlobalStyle`
  body,
  header {
    transition: background-color .5s linear;
  }

  header {
    background-color: hsl(225, 100%, 98%);
  }

  .card{
    background-color: hsl(227, 47%, 96%);
  }
`;
