import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const Card = styled.div`
  width: 100%;
  max-width: 25rem;

  height: 25rem;

  box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);

  border-radius: 1rem;

  padding: 2.6rem 1.4rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  position: relative;

  box-sizing: border-box;

  animation: 0.5s ease-out 0s 1 appearAnimation;

  @keyframes appearAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Title = styled.h1`
  color: ${(props): string => props.theme.colors.main};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.875rem;

  display: flex;
  flex-direction: column;

  margin: 0;

  &::after {
    content: '';
    background-color: ${(props): string => props.theme.colors.greyDarker};
    width: 100%;
    height: 0.1rem;

    margin-top: 0.9rem;
  }
`
export const Actions = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 2rem;

  display: flex;
  gap: 2.4rem;
`
type ActionButtonProps = {
  state: 'error' | 'information' | 'success'
}

export const ActionButton = styled.button<ActionButtonProps>`
  background-color: transparent;
  border: none;
  outline: none;
  transition: color 0.2s linear;
  color: ${(props): string => props.theme.colors.greyDarker};
  padding: 0;

  cursor: pointer;

  &:hover {
    color: ${(props): string =>
      props.state === 'error'
        ? props.theme.colors.error
        : props.theme.colors.main};
  }
`

export const Description = styled.div`
  padding: 0 1.2rem;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.1rem;

  & > span {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.9rem;

    display: flex;

    & > * {
      margin-left: 1rem;
    }
  }
`

const SharedEditingInputStyle = `
  background-color: transparent;

  border: none;

  outline: none;

  width: 100%;
  padding: 0;
`

export const EditingInput = styled.input`
  ${SharedEditingInputStyle}
  border-bottom: .1rem solid ${(props): string => props.theme.colors.grey};

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.9rem;
`

export const EditingMaskedInput = styled(InputMask)`
  ${SharedEditingInputStyle}
  border-bottom: .1rem solid ${(props): string => props.theme.colors.grey};

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.9rem;
`
