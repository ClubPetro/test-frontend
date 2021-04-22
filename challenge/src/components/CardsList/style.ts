import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 770px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
