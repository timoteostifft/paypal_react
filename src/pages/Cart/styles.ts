import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #FAFAFA;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Form = styled.form`
  max-width: 600px;
  gap: 10px;
  display: flex;
  flex-direction: column;

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