import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    div {
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
          background: #e74c3c;

          &:hover {
            background: #c0392b;
          }
        }
      }
    }
  `}
`;
