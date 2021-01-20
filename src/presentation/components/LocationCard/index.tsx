import React, { useEffect, useState } from 'react'
import { Country } from '../../../domain/entities/country'
import { useLocationHook } from '../../hooks/useLocationHook'
import { IconCheck, IconExit, IconPencil } from '../Icons'

import {
  ActionButton,
  Actions,
  Card,
  Description,
  EditingInput,
  EditingMaskedInput,
  Title,
} from './style'

type LocationCardProps = {
  countryRef: Country
  place: string
  goal: string
  id: number
}

export const LocationCard: React.FC<LocationCardProps> = ({
  countryRef,
  id,
}: LocationCardProps) => {
  const {
    locationInfo,
    changeLocationInfo,
    actions: { handleDelete, handleEdit, handleSelect },
  } = useLocationHook()

  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (isLoading) {
      handleSelect(id)
      setIsLoading(false)
    }
  }, [isLoading, id, handleSelect])

  return (
    <Card data-testid="LocationCard">
      <Actions>
        <ActionButton
          state="information"
          type="button"
          onClick={(): void => {
            if (isEditing) {
              handleEdit(id)
            } else {
              handleSelect(id)
            }
            setIsEditing(prev => !prev)
          }}>
          {isEditing ? <IconCheck /> : <IconPencil />}
        </ActionButton>
        <ActionButton
          type="button"
          state="error"
          onClick={(): void => handleDelete(id)}>
          <IconExit />
        </ActionButton>
      </Actions>
      <img
        src={countryRef && countryRef.flag}
        width="56"
        height="34"
        alt={countryRef && countryRef.translations['pt']}
      />
      <Title>{countryRef && countryRef.translations['pt']}</Title>
      <Description>
        <span>
          Local:{' '}
          {!isEditing ? (
            <span>{locationInfo.place}</span>
          ) : (
            <EditingInput
              value={locationInfo.place}
              onChange={(event): void =>
                changeLocationInfo({ place: event.target.value })
              }
            />
          )}
        </span>
        <span>
          Meta:{' '}
          {!isEditing ? (
            <span>{locationInfo.goal}</span>
          ) : (
            <EditingMaskedInput
              mask="99/9999"
              placeholder="mês/ano"
              value={locationInfo.goal}
              onChange={(event): void =>
                changeLocationInfo({ goal: event.target.value })
              }
            />
          )}
        </span>
      </Description>
    </Card>
  )
}
