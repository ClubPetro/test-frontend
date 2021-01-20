import React from 'react'
import { Country } from '../../../domain/entities/country'
import { LocationCard } from '../../components/LocationCard'
import { useLocationHook } from '../../hooks/useLocationHook'
import {
  Container,
  Form,
  Header,
  Select,
  Label,
  Input,
  InputMaskStyled,
  Button,
} from './style'

export const Home: React.FC = () => {
  const {
    countries,
    locationInfo,
    changeLocationInfo,
    locations,
    actions: { handleSubmit },
  } = useLocationHook()

  function byTranslation(
    currentCountry: Country,
    nextCountry: Country,
  ): number {
    return currentCountry.translations['pt'] < nextCountry.translations['pt']
      ? -1
      : 1
  }

  return (
    <Container>
      <Header>
        <img
          src={require('../../assets/logo.png')}
          alt="Lugares que eu quero conhecer"
        />
      </Header>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>
            <span>País</span>
            <Select
              data-testid="Country"
              onChange={(event): void =>
                changeLocationInfo({ country: event.target.value })
              }
              value={locationInfo.country || 'placeholder'}>
              <option value="placeholder" disabled>
                Selecione...
              </option>
              {countries?.sort(byTranslation).map(country => (
                <option key={country.alpha3Code} value={country.alpha3Code}>
                  {country.translations['pt']}
                </option>
              ))}
            </Select>
          </Label>
          <Label style={{ flex: 1 }}>
            <span>Local</span>
            <Input
              type="text"
              data-testid="Place"
              placeholder="Digite o local que deseja conhecer"
              value={locationInfo.place}
              onChange={(event): void =>
                changeLocationInfo({ place: event.target.value })
              }
            />
          </Label>
          <Label>
            <span>Meta</span>
            <InputMaskStyled
              mask="99/9999"
              data-testid="Goal"
              value={locationInfo.goal}
              placeholder="mês/ano"
              onChange={(event): void =>
                changeLocationInfo({ goal: event.target.value })
              }
            />
          </Label>
          <Button
            type="button"
            data-testid="Button"
            disabled={
              !locationInfo.country || !locationInfo.place || !locationInfo.goal
            }>
            Adicionar
          </Button>
        </div>
      </Form>
      <main>
        {locations && locations?.length > 0 ? (
          locations?.map(location => (
            <LocationCard
              key={location.id}
              countryRef={
                countries?.filter(
                  country => country.alpha3Code === location.country,
                )[0] as Country
              }
              {...location}
            />
          ))
        ) : (
          <h1>Você ainda não tem nenhum destino cadastrado</h1>
        )}
      </main>
    </Container>
  )
}
