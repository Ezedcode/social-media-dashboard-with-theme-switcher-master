import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  border-radius: 7px;
  flex-direction: column;
  justify-content: center;

  & > div {
    width: 80%;
    padding: 12px 0px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  & > div:last-child {
    height: 40px;
  }

  & h2 {
    font-size: 40px;
  }

  & > div:nth-of-type(1) > p {
    font-weight: bolder;
  }

  & > div > div {
    display: flex;
    align-items: end;
  }

  & > div > div img {
    height: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
  }

  & .state {
    color: ${(props) =>
      props.state ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)"};
  }
`;
