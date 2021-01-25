import styled, { css } from 'styled-components';

interface IDashProps {
  width?: 'small' | 'large';
}

export const Container = styled.div<IDashProps>`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 0 24px;
  width: 100%;
  height: 3.25rem;

  font-size: 16px;
  & + div {
    margin-top: 24px;
  }

  ${props =>
    props.width === 'large' &&
    css`
      width: 28.5rem;
    `}

  @media screen and (max-width: 1300px) {
    ${props =>
      props.width === 'large' &&
      css`
        width: 90vw;
      `}
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
