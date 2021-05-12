import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: calc(129.6rem + ${theme.spacings.small} * 2);
    margin: 0 auto;
    padding: 0 ${theme.spacings.small};
  `}
`;
