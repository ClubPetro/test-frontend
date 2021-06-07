import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 250px;
  height: 250px;
  flex-direction: column;
  align-items: flex-start;

  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 14px 15px;
`;

export const Presentation = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 1px solid #ababab;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
`;

export const Flag = styled.img`
  margin-top: 10px;
  width: 56px;
  height: 34px;
`;

export const ContainerIcons = styled.div`
  .MuiIconButton-root {
    color: #868686;
  }
`;

export const Text = styled.h3`
  font: "Roboto", sans-serif;
  color: var(--lightGreen);
  margin-bottom: 5px;
`;

export const Description = styled.p`
  font: "Roboto", sans-serif;
  text-align: left;
  margin-bottom: 5px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
