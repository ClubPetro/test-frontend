import styled from 'styled-components';

import { Form as Unform } from '@unform/web';

export const Title = styled.h1`
  color: #aaaaaa;
`;

export const Header = styled.header`
  width: 100%;
  background: #000000;

  height: 5.31rem;
  display: flex;
  justify-content: center;

  /* img {
    padding-left: 6.8%;
  } */

  /* @media screen and (max-width: 1450px) {
    justify-content: center;
    img {
      padding-left: 0;
    }
  } */
`;

export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  max-width: 87.5rem;

  @media screen and (max-width: 1450px) {
    justify-content: center;
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SubNav = styled.div`
  background: #4f9419;
  width: 100%;
  /* height: 12.68rem; */
  display: flex;
  margin: auto 0;
  /* align-items: center; */
  justify-content: center;
  margin-bottom: 3.37rem;

  div {
    display: flex;
    flex-direction: column;
    /* padding-top: 3.75rem; */
  }

  div:first-child {
    padding-right: 2.12rem;
  }

  div + div + div {
    padding-left: 1.75rem;
  }

  @media screen and (max-width: 1300px) {
    div:first-child {
      padding-left: 0;
      padding-right: 0;
    }

    div + div + div {
      padding-left: 0;
    }
  }
`;

export const Form = styled(Unform)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12.68rem;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    height: 20%;
    width: 90%;
  }
`;

export const Label = styled.label`
  color: #ffffff;
  padding-left: 0.12rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 0.18rem;

  @media screen and (max-width: 1300px) {
    & {
      margin-top: 20px;
    }
  }
`;

export const Select = styled.select`
  padding: 0.5em 3.5em 0.5em 1em;
  width: 18.93rem;
  height: 3.25rem;
  border-color: #fff;
  /* border: 10px solid #cad5df; */
  border-radius: 7px;

  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;

  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: linear-gradient(45deg, transparent 50%, #000000 50%),
    linear-gradient(135deg, #000000 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1em + 5px),
    calc(100% - 15px) calc(1em + 5px), 100% 0;
  background-size: 5px 5px, 5px 5px, 2.5em 3em;
  background-repeat: no-repeat;

  @media screen and (max-width: 1300px) {
    width: 90vw;
  }
`;

export const Input = styled.input`
  height: 3rem;
  width: 28.43rem;
  border-radius: 7px;
  box-shadow: none;
  box-shadow: 0 0 0 0;
  padding: 14px 16px;
  @media screen and (max-width: 1300px) {
    width: 90vw;
  }
`;

export const Input2 = styled.input`
  height: 3rem;
  width: 14.87rem;
  border-radius: 7px;
  box-shadow: none;
  box-shadow: 0 0 0 0;
  padding: 14px 16px;

  @media screen and (max-width: 1300px) {
    width: 90vw;
  }
`;

export const ButtonAdd = styled.button`
  width: 12.68rem;
  height: 3rem;
  /* margin-top: 5rem; */
  border-radius: 7px;
  background: #006c18;
  color: #fff;
  border: 0;
  margin-left: 2.12rem;
  margin-top: 22px;

  @media screen and (max-width: 1300px) {
    width: 100%;
    margin-left: 0;
    margin-top: 30px;
    margin-bottom: 40px;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  align-items: center;
  margin: 0 auto;
  justify-content: center;

  display: grid;
  margin-bottom: 1rem;

  grid-template-columns: repeat(auto-fit, minmax(15.62rem, auto));
  grid-gap: 30px 32px;
`;
