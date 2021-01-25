import styled, { css } from 'styled-components';

interface IDashProps {
  width?: 'small' | 'large';
}

export const Container = styled.div<IDashProps>`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 18px 24px;

  width: 100%;
  font-size: 16px;

  ${props =>
    props.width === 'large' &&
    css`
      @media screen and (max-width: 1300px) {
        width: 90vw;
      }
    `}

  & + div {
    margin-top: 24px;
  }
  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  input {
    width: 100%;
    height: 100%;
    flex: 1;
    background: transparent;
    border: 0;
    color: #fffff;
    &::placeholder {
      color: #b7b7cc;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
