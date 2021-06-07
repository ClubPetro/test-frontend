import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: #363f5f;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid rgba(215, 215, 215, 1);
    background: rgba(231, 233, 238, 1);

    font-weight: 600;
    font-size: 1rem;

    &::placeholder {
      color: #969cb2;
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--lightGreen);

    color: #fff;

    border-radius: 0.25rem;
    border: 0;

    font-size: 1rem;
    margin-top: 1.5rem;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ContainerButtonsType = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;
