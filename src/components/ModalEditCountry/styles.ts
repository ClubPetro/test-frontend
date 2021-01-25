import styled from 'styled-components';

import { Form as Unform } from '@unform/web';

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  border-radius: 7px;
  box-shadow: none;
  box-shadow: 0 0 0 0;
  padding: 14px 16px;
`;

export const Form = styled(Unform)`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  div:first-child {
    border-bottom: 1px solid #ababab;
    display: flex;
  }

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 0.62rem;
  }

  button {
    margin-top: 48px;
    align-self: flex-end;
  }

  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #39b100;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 16px 24px;
    }

    .icon {
      display: flex;
      padding: 16px 16px;
      background: #41c900;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }
  }

  div + div {
    padding-top: 1.25rem;
    display: flex;
    flex-direction: column;
    /* padding-bottom: 16px; */
  }
`;

export const Label = styled.label`
  color: #000000;
  padding-left: 0.12rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 0.18rem;
`;

export const Select = styled.select`
  padding: 0.5em 3.5em 0.5em 1em;
  width: 100%;
  height: 3rem;
  border-color: #fff;
  /* border: 10px solid #cad5df; */
  border-radius: 7px;

  /* cursor: pointer; */

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
`;
