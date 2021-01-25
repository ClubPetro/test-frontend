import styled from 'styled-components';

export const Container = styled.div`
  width: 15.62rem;
  height: 15.62rem;

  border-radius: 10px;

  box-shadow: 0px 2px 2px 1px #c2c2c2;

  h2 {
    color: #4f9419;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 0.56rem;
  }

  header {
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    position: relative;

    div:first-child {
      img {
        width: 3.5rem;
        /* height: 2.12rem; */
        padding-bottom: 1rem;
      }

      padding-left: 0.5rem;
      border-bottom: 1px solid #ababab;
      margin: 0 8px;
      margin-bottom: 2.68rem;
      margin-top: 1.62rem;
    }
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .body {
      width: 90%;

      > p {
        padding-left: 0.8rem;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
`;

export const IconsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  /* img {
    margin-right: 16px;
  } */

  button {
    margin-right: 16px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;

    svg {
      color: #868686;
    }
  }
`;
