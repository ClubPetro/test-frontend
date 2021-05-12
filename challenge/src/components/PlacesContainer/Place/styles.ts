import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.medium} ${theme.spacings.xsmall} 0;
    border-radius: ${theme.radius.large};
    box-shadow: 0 ${theme.spacings.xxsmall} ${theme.spacings.xxsmall}
      rgba(0, 0, 0, 0.2);
    position: relative;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    img {
      width: 5.6rem;
      height: 3.4rem;
    }

    strong {
      font-weight: ${theme.font.bold};
      color: ${theme.colors.primary};
      text-transform: uppercase;
      display: block;
      margin: ${theme.spacings.small} 0 ${theme.spacings.xsmall};
    }
  `}
`;

export const Infos = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
    padding: ${theme.spacings.small};
  `}
`;

export const Buttons = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.spacings.medium};
    right: ${theme.spacings.small};
    gap: ${theme.spacings.medium};
    display: flex;
    align-items: center;

    button {
      background: transparent;
      color: ${theme.colors.gray};
    }
  `}
`;
