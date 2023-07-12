import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
`

export const Wrapper = styled.div`
  margin: 0 auto 20px auto;
  max-width: 1024px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media(min-width: 768px) {
    flex-direction: row;

    >:nth-child(1) {
      min-width: 400px;
    }
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;

  button {
    border: 0;
    background-color: #DBAC2C;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    span {
      font-weight: 700;
      color: #fff;
    }

    svg {
      color: #fff;
      font-size: 20px;
    }
  }
`;

export const Card = styled.div`
  border-radius: 8px;
  background-color: #F3F2F2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;

  header {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 4px;

    svg {
      margin: auto 0;
      font-size: 32px;
      color: #C47F17;
    }

    h3 {
      color: #272221;
    }

    p {
      font-size: 0.8rem;
      color: #403937;
    }
  }
`;

export const SliderWrapper = styled.section`
  > div {
    display: flex;
    flex-direction: row;
  }

  @media(min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }

    > div {
      flex-direction: column;

      &::-webkit-scrollbar{
        display: none;
      }

      span:nth-child(2) {
        margin-top: 16px;
      }
    }
  }
`;