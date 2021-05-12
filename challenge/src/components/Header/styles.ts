import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    nav {
      background: ${theme.colors.black};
    }
  `}
`;
