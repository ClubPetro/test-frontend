import styled from 'styled-components'

export const MainCointainer = styled.div`
display:flex;
flex-direction: column;
width: 100%;
height: 100vh;
overflow-x: hidden;
min-width: 320px;
`
export const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: flex-start;
width: 100%;
left: 0px;
top: 285px;
background: #fff;

@media(max-width: 1240px) {
     display: flex;
     width: 100%;
     justify-content: center;
  }
`

export const HeaderContainer = styled.header`
display: flex;
justify-content: flex-start;
width: 100%;
height: 85px;
background-color: #000000;

`

export const Img = styled.img`
width: 142px;
height: 82px;
margin: 2px 0px 0px 60px;
`


export const SearchContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
min-height: 317px;
top: 38px;
left: 0px;
background-color: #4F9419;
padding: 20px 0px;

@media(max-width: 1340px) {
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
  }

`

export const Col = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
background-color: #4F9419;
margin: 0 15px;

`

export const CardEditContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
`

export const P = styled.p`
font-size: 1rem;
color: #fff;
margin: 2px;
background-color: #4f9419;
`

export const Select = styled.select`
width: 303px;
height: 48px;
padding: 12px;
border: none;
outline: none;
border-radius: 7px;

@media(max-width: 480px) {
   width: 280px;
  }


`

export const InputText = styled.input`
width: 455px;
height: 48px;
border-radius: 7px;
padding: 12px;
border: none;
outline: none;

@media(max-width: 480px) {
   width: 280px;
  }

`

export const ButtonAdd = styled.button`
width: 203px;
height: 49px;
border: none;
outline: none;
background-color: #006C18;
border-radius: 7px;
color: #FFFFFF;
font-size: 1.1rem;
margin-top: 20px;
transition: cursor .3s ease-in-out;

&:hover{
    cursor: pointer;
}

`

export const ModalContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
`

export const Modal = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 250px;
    height: 200px;
    background-color: #555;
    padding: 20px;
    z-index: 999;
    border-radius: 7px;
    box-shadow: 0px 0px 3px 2px #333;

`


export const ModalInput = styled.input`
width: 200px;
height: 32px;
border-radius: 7px;
padding: 12px;
border: none;
outline: none;
`
export const ModalButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`

export const ModalButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 64px;
height: 32px;
border-radius: 7px;
padding: 12px;
border: none;
outline: none;
margin: 0px 5px;
 
 &:hover{
     cursor: pointer
 }

`
