import styled from "styled-components";

export const Container = styled.div`
  & > div:first-child {
    width: 100%;
    height: 5px;
    border-radius: 7px 7px 0px 0px;
  }

  &.facebook > div:first-child {
    background-color: hsl(208, 92%, 53%);
  }

  &.twitter > div:first-child {
    background-color: hsl(203, 89%, 53%);
  }

  &.instagram > div:first-child {
    background: linear-gradient(
      to right,
      hsl(37, 97%, 70%),
      hsl(329, 70%, 58%)
    );
  }

  &.youtube > div:first-child {
    background-color: hsl(348, 97%, 39%);
  }

  & > div {
    width: 100%;
    height: 13rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0px 0px 7px 7px;
  }

  & h1 {
    font-size: 3.5rem;
  }

  & > div > p {
    letter-spacing: 4.5px;
  }

  & > div div {
    padding: 15px 0;
    display: flex;
    align-items: center;
  }

  & img {
    padding-right: 10px;
  }

  & > div > div:last-child img {
    height: 5px;
    padding-right: 5px;
  }

  & .state {
    color: ${(props) =>
      props.state ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)"};
  }
`;
