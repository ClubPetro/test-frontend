import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    padding: ${theme.spacings.xxlarge} 0;

    form {
      max-width: 80rem;
      margin: 0 auto;
      padding: 0 ${theme.spacings.small};
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.small};

      button {
        width: 100%;
        height: 4.8rem;
        background: ${theme.colors.primaryDark};
        border-radius: ${theme.radius.default};
        font-size: 1.8rem;
        color: ${theme.colors.white};
        margin-top: ${theme.spacings.xsmall};
      }
    }

    ${media.greaterThan('large')`
      form {
        max-width: 100%;
        display: grid;
        grid-template-columns: 30rem 1fr 24rem 20rem;
        align-items: flex-start;
        gap: ${theme.spacings.large};

        button {
          margin-top: ${theme.spacings.medium};
        }
      }
    `}
  `}
`;
