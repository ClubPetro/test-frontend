import styled, { css } from 'styled-components';

interface WrapperProps {
  type?: 'success' | 'error' | 'info' | 'warning';
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
  `,
  success: css`
    background: #27ae60;
  `,
  error: css`
    background: #c0392b;
  `,
  warning: css`
    background: #f39c12;
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    color: ${theme.colors.white};
    border-radius: ${theme.radius.default};

    & + div {
      margin-top: ${theme.spacings.small};
    }

    div > {
      flex: 1;
    }

    button {
      background: transparent;
      color: ${theme.colors.white};
    }
  `}

  ${({ type }) => toastTypeVariations[type || 'info']}
`;
