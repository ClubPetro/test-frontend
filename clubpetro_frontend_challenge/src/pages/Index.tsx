import React, { useState, useEffect, ChangeEvent, FormEvent, useRef } from 'react'

import axios, { AxiosResponse } from 'axios'
import InputMask from 'react-input-mask'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import cardsImg from '../assets/img/places.png'

import CardInfo, { CardProps } from '../components/CardInfo/CardInfo'
import CardEdit from '../components/CardEdit/CardEdit'


import {
  ButtonAdd,
  Col,
  CardsContainer,
  HeaderContainer,
  SearchContainer,
  MainCointainer,
  P,
  Select,
  InputText,
  Img,
} from './styles'


interface Country {
  name: string,
  translations: string,
  flag: string,
  id: number
}

interface Cards {
  id: number,
  countryName: string,
  countryFlag: string,
  local: string,
  goal: string
}


const Index: React.FC<CardProps> = () => {

  const [country, setCountry] = useState<string[]>([])
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const [countryName, setCoutnryName] = useState<string>('')
  const [countryFlag, setCountryFlag] = useState<string>('')
  const [local, setLocal] = useState<string>('')
  const [goal, setGoal] = useState<string>('')
  const [cards, setCards] = useState<Cards[]>([])
  const [, setCardId] = useState<number[]>([])
  const [, setCardCountryName] = useState<string[]>([])
  const [, setCardCountryFlag] = useState<string[]>([])
  const [, setCardLocal] = useState<string[]>([])
  const [, setCardGoal] = useState<string[]>([])
  const [requestCount, setRequestCount] = useState<number>(0)
  const [modalEdit, setModalEdit] = useState<boolean>(false)

  const localInputRef = useRef<HTMLInputElement>(null)


  //GET DATA FROM SELECTED COUNTRY
  useEffect(() => {
    const refreshData = setTimeout(async () => {
      await axios.get<Country[]>(`https://restcountries.eu/rest/v2/name/${String(selectedCountry)}`)
        .then((response: AxiosResponse) => {
          const transalations: string = response.data.map((item: any) => item.translations.pt)
          const { flag } = response.data[0]
          setCountryFlag(flag)
          setCoutnryName(transalations[0])
        })
      return () => clearTimeout(refreshData)
    }, 100)
  }, [selectedCountry]
  )


  //FILL THE SELECT WITH COUNTRIES FROM API
  useEffect(() => {

    axios.get<Country[]>('https://restcountries.eu/rest/v2/all').then(response => {
      const countriesList = response.data.map(country => country.name)
      setCountry(countriesList)
    })

  }, [requestCount])


  //RENDER THE CARDS PLACES
  useEffect(() => {
    axios.get<Cards[]>('http://localhost:3333/cards').then(response => {
      const cardsList = response.data
      const countryName = response.data.map(country => country.countryName)
      const countryFlag = response.data.map(country => country.countryFlag)
      const local = response.data.map(country => country.local)
      const goal = response.data.map(country => country.goal)
      const id = response.data.map(country => country.id)
      setCards(cardsList)
      setCardCountryName(countryName)
      setCardCountryFlag(countryFlag)
      setCardLocal(local)
      setCardGoal(goal)
      setCardId(id)
    })
  }, [country])
  

  //SET THE DOCUMENT TITLE DYNAMICLY
  document.title = `${cards.length} Lugares que eu quero conhecer`


  //CANCEL EDIT
  const cancelEdit = () => {
    setModalEdit(false)
  }


  //CREATE A PLACE 
  const newCard = async (e: FormEvent) => {

    e.preventDefault()

    if (Number(goal.substring(0, 2)) > 12) {
      toast.warn('Por favor, informe um mês válido.')
      setGoal('')
      const resetForm = document.querySelector('form')
      resetForm?.reset()

    } else if (local === '' || goal === '' || selectedCountry === '0') {

      toast.warn('Por favor, preencha todos os dados.')
      setGoal('')
      const resetForm = document.querySelector('form')
      resetForm?.reset()

    } else {

      toast.success('Você adicionou um novo lugar.')

      const id = Number(((Math.random() * 100) * Math.random() * 10).toFixed(0))
      const newLocal = local
      const newGoal = goal

      await axios.post('http://localhost:3333/cards', {
        "id": id,
        "countryName": countryName,
        "countryFlag": countryFlag,
        "local": newLocal,
        "goal": newGoal
      })

      const resetForm = document.querySelector('form')
      resetForm?.reset()

      setSelectedCountry('0')
      setGoal('')
      setLocal('')
      setRequestCount(requestCount + 1)
    }
  }


  //EDIT A PLACE
  const editCard = async (id: number) => {

    if (Number(goal.substring(0, 2)) > 12) {
      toast.warn('Por favor, informe um mês válido.')
      setGoal('')
      const resetForm = document.querySelector('form')
      resetForm?.reset()

    } else if (local === '' || goal === '') {
      toast.warn('Por favor, preencha todos os dados.')
      setGoal('')
      const resetForm = document.querySelector('form')
      resetForm?.reset()
    }

    else {
      toast.success('Você editou um lugar.')
      setModalEdit(false)

      const selectEditCard = await cards.map(item => {
        return item.id === id &&
          axios.put(`http://localhost:3333/cards/${id}`, {
            "id": id,
            "countryName": countryName,
            "countryFlag": countryFlag,
            "local": local,
            "goal": goal,
          })
      })
      return [
        selectEditCard,
        setRequestCount(requestCount + 1),
      ]
    }
  }


  //REMOVE A PLACE
  const dropCard = async (id: number) => {
    toast.success('Você removeu um lugar.')

    await axios.delete(`http://localhost:3333/cards/${id}`)
    setRequestCount(requestCount + 1)
  }


  return (
    <MainCointainer>
      <div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          bodyStyle={{ color: '#fff' }}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
      <HeaderContainer>
        <Img src={cardsImg} alt='ClubPetro Frontend Challenge' />
      </HeaderContainer>

      <form onSubmit={newCard}>
        <SearchContainer>
          <Col>
            <P >País</P>
            <Select name='country'
              id='country-name'
              onChange={e => setSelectedCountry(e.target.value)}
            >
              <option placeholder="Selecione um país" value={0}>Selecione um país</option>
              {country.sort().map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </Select>
          </Col>
          <Col>
            <P>Local</P>
            <InputText
              placeholder='Digite o local que deseja conhecer'
              onChange={(e: ChangeEvent<HTMLInputElement>) => setLocal(e.target.value)}
              maxLength={24}
              ref={localInputRef}
            />
          </Col>
          <Col>
            <P>Meta</P>
            <InputMask
              placeholder='mês/ano'
              value={goal}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setGoal(e.target.value)}
              mask='99/2099'
              style={{
                width: 238,
                height: 48,
                borderRadius: 7,
                padding: 12,
                border: 'none',
                outline: 'none',
              }}
            />
          </Col>
          <Col>
            <ButtonAdd
              type='submit'
              data-testid='btn-new-card'
              >
              Adicionar
          </ButtonAdd>
          </Col>
        </SearchContainer>
      </form>
      <CardsContainer>
        {
          modalEdit ?
            cards.map((card: Cards) => (
              <>
                <CardEdit
                  key={card.id}
                  countryProp={card.countryName}
                  localProp={card.local}
                  goalProp={card.goal}
                  flagImg={card.countryFlag}
                  cancelEdit={cancelEdit}
                  editCard={() => editCard(card.id)}
                  editGoal={(e: ChangeEvent<HTMLInputElement>) => setGoal(e.target.value)}
                  editLocal={(e: ChangeEvent<HTMLInputElement>) => setLocal(e.target.value)}

                />
              </>
            ))
            :
            cards.map((card: Cards) => (
              <>
                <CardInfo
                  key={card.id}
                  data-testid='new-card'
                  countryProp={card.countryName}
                  localProp={card.local}
                  goalProp={card.goal}
                  flagImg={card.countryFlag}
                  dropCard={() => dropCard(card.id)}
                  editCard={() => setModalEdit(true)}
                  editGoal={(e: ChangeEvent<HTMLInputElement>) => setGoal(e.target.value)}
                  editLocal={(e: ChangeEvent<HTMLInputElement>) => setLocal(e.target.value)}

                />
              </>
            ))
        }
      </CardsContainer>
    </MainCointainer>
  )
}

export default Index