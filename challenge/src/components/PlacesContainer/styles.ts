import styled, { css } from 'styled-components';

import { Wrapper as Container } from '../Container/styles';

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0;

    ${Container} {
      max-width: calc(137rem + ${theme.spacings.small} * 2);
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
      grid-auto-rows: 25rem;
      gap: ${theme.spacings.large};
    }
  `}
`;
