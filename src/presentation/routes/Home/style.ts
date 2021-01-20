import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const Container = styled.section`
  height: 100vh;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;

    overflow: auto;

    padding: 5.6rem 0;

    max-width: 144rem;
    width: 100%;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      border-radius: 0.5rem;
    }

    & > h1 {
      font-size: 2.4rem;
    }

    &:hover {
      &:-webkit-scrollbar-thumb {
        background-color: ${(props): string => props.theme.colors.greyDarker};
      }
    }
  }
`

export const Header = styled.header`
  background-color: ${(props): string => props.theme.colors.black};
  height: 8.5rem;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  padding: 0 5.3rem;

  @media screen and (max-width: 950px) {
    justify-content: center;
  }
`

export const Form = styled.form`
  background-color: ${(props): string => props.theme.colors.main};
  width: 100%;

  box-sizing: border-box;

  padding: 0 7.3rem;
  min-height: 20.3rem;
  height: fit-content;

  display: flex;
  justify-content: center;

  & > div {
    display: flex;
    align-items: center;
    flex-direction: row;

    height: 100%;

    width: 100%;
    max-width: 129.5rem;

    gap: 3.4rem;
  }

  @media screen and (max-width: 950px) {
    min-height: auto;

    & > div {
      flex-direction: column;

      height: auto;

      padding: 5rem 2.5rem;
    }

    & > * {
      width: 100%;
    }
  }

  @media screen and (max-width: 450px) {
    padding: 0 1rem;

    & > div {
      padding: 5rem 0;
    }
  }
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;

  & > span {
    color: ${(props): string => props.theme.colors.white};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.875rem;
    position: absolute;
    top: -2rem;
    left: 0.5rem;
  }

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`

const SharedInputStyle = `
  height: 4.8rem;

  border-radius: 0.7rem;

  outline: none;
  border: none;
  padding: 0 1.5rem;

  font-size: 1.6rem;

`

export const Select = styled.select`
  ${SharedInputStyle}

  width: 100%;

  color: ${(props): string => props.theme.colors.grey};
  background-color: ${(props): string => props.theme.colors.white};
`

export const Input = styled.input`
  ${SharedInputStyle}


  color: ${(props): string => props.theme.colors.grey};
  background-color: ${(props): string => props.theme.colors.white};
`
export const InputMaskStyled = styled(InputMask)`
  ${SharedInputStyle}


  color: ${(props): string => props.theme.colors.grey};
  background-color: ${(props): string => props.theme.colors.white};
`

export const Button = styled.button`
  ${SharedInputStyle}

  width: 20.3rem;

  background-color: ${(props): string => props.theme.colors.secondary};
  color: ${(props): string => props.theme.colors.white};

  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.109rem;

  cursor: pointer;

  ${(props): string =>
    props.disabled
      ? `
    opacity: .5;
    cursor: not-allowed;
  `
      : `
    opacity: 1;
    cursor:pointer;
  `}
`
