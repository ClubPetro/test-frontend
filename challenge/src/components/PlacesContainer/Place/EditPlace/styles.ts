import styled, { css } from 'styled-components';

import { Form } from 'formik';

import { Wrapper as Field } from '../../../Input/styles';

export const Container = styled(Form)`
  ${({ theme }) => css`
    ${Field} {
      margin-bottom: ${theme.spacings.small};

      label {
        color: ${theme.colors.black};
      }

      input {
        border-color: ${theme.colors.lightGray};
      }
    }
  `}
`;

export const Buttons = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${theme.spacings.medium};

    button {
      height: 4.8rem;
      padding: 0 ${theme.spacings.medium};
      background: ${theme.colors.lightGray};
      border-radius: ${theme.radius.default};
      font-weight: ${theme.font.bold};
      text-transform: uppercase;
      color: ${theme.colors.white};
      transition: background ${theme.transitions.default};

      &:hover {
        background: ${theme.colors.gray};
      }

      & + button {
        margin-left: ${theme.spacings.small};
        background: ${theme.colors.primary};

        &:hover {
          background: ${theme.colors.primaryDark};
        }
      }
    }
  `}
`;
