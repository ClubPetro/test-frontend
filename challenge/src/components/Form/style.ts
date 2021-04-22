import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #4f9419;
  padding: 30px 10px 40px;

  @media (max-width: 640px) {
    padding: 10px;
    height: 50vh;
  }

  @media (max-width: 420px) {
    height: 40vh;
  }

  @media (max-width: 375px) {
    height: 45vh;
  }

  @media (max-width: 320px) {
    height: 55vh;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 640px) {
      flex-direction: column;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font: 400 1rem Roboto, sans-serif;
    color: #fff;

    @media (max-width: 640px) {
      margin: 10px 0;
    }
  }

  select,
  input {
    border: none;
    border-radius: 7px;
    padding: 10px;
    background-color: #fff;
    color: #868686;
  }

  select {
    width: 20vw;

    @media (max-width: 640px) {
      width: 90vw;
    }
  }

  input {
    width: 10vw;

    @media (max-width: 640px) {
      width: 90vw;
    }
  }

  input#place {
    width: 40vw;

    @media (max-width: 640px) {
      width: 90vw;
    }
  }
`;

export const Button = styled.button`
  border: none;
  width: 10vw;
  background: #006c18;
  padding: 8px;
  font: 400 1rem Roboto, sans-serif;
  color: #fff;
  border-radius: 7px;
  margin-top: 17px;
  cursor: pointer;

  @media (max-width: 640px) {
    width: 50vw;
  }
`;
