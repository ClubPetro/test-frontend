import styled, { css } from 'styled-components';

interface WrapperProps {
  error: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme }) => css`
    label {
      display: block;
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.xxsmall};
    }

    .react-select {
      &__control {
        height: 4.8rem;
        border-radius: ${theme.radius.default};
      }

      &__value-container {
        padding: 0 ${theme.spacings.small};
      }

      &__single-value {
        margin: 0;
      }

      &__placeholder {
        color: ${theme.colors.gray};
      }

      &__menu {
        border-radius: ${theme.radius.default};
      }

      &__menu {
        overflow: hidden;
      }

      &__menu-list {
        padding: 0;
      }

      &__option {
        height: 4.8rem;
        display: flex;
        align-items: center;
        padding: ${theme.spacings.small};
      }
    }
  `}

  ${({ theme, error }) =>
    error &&
    css`
      .react-select {
        &__control {
          background: ${theme.colors.lightRed};
        }
      }
    `}
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.darkRed};
    margin-top: ${theme.spacings.xxsmall};
  `};
`;
