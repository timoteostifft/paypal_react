import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  img {
    margin: 0 auto;
    width: 120px;
  }

  span {
  }

  span:nth-child(2) {
    font-size: 1rem;
    color: #574F4D;
  }

  span:nth-child(3) {
    font-size: 1.1rem;
    color: #272221;
  }

  p {
    margin-top: 4px;
    font-size: 0.6rem;
    color: #8D8686;
  }
`;