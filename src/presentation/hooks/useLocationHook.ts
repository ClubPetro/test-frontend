import { FormEvent, useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { listCountries } from '../../data/services/country'
import { locationSelector } from '../../domain/ducks/locationReducer'
import { Country } from '../../domain/entities/country'
import {
  Location,
  NEW_LOCATION,
  UpdateLocation,
} from '../../domain/entities/location'
import {
  addLocationThunk,
  deleteLocationThunk,
  editLocationThunk,
  getLocationsThunk,
} from '../../domain/thunks/locationThunk'

type UseLocaleHook = {
  countries: Country[] | undefined
  locationInfo: UpdateLocation
  changeLocationInfo: (info: Info) => void
  locations: Location[] | undefined
  actions: {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
    handleDelete: (id: number) => void
    handleEdit: (id: number) => void
    handleSelect: (id: number) => void
  }
}

type Info = {
  [key: string]: string | undefined | number | null | boolean | object
}

export const useLocationHook = (): UseLocaleHook => {
  const dispatch = useDispatch()
  const { locations } = useSelector(locationSelector)
  const reducer = (location: UpdateLocation, info: Info): UpdateLocation => ({
    ...location,
    ...info,
  })
  const [locationInfo, changeLocationInfo] = useReducer(reducer, NEW_LOCATION)

  const [countries, setCountries] = useState<Country[]>()

  async function getCountries(): Promise<void> {
    setCountries(await listCountries())
  }

  useEffect(() => {
    getCountries()
    dispatch(getLocationsThunk())
  }, [dispatch])

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault()
    try {
      dispatch(addLocationThunk(locationInfo))
      changeLocationInfo({ ...NEW_LOCATION })
    } catch (error) {
      toast.error(error.message)
    }
  }

  async function handleDelete(id: number): Promise<void> {
    try {
      dispatch(deleteLocationThunk(id))
    } catch (error) {
      toast.error(error.message)
    }
  }

  function handleSelect(id: number): void {
    const filteredLocation = locations?.filter(
      location => location.id === id,
    )[0]
    changeLocationInfo({
      country: filteredLocation.country,
      place: filteredLocation.place,
      goal: filteredLocation.goal,
    })
  }

  async function handleEdit(id: number): Promise<void> {
    try {
      dispatch(editLocationThunk({ ...locationInfo, id }))
    } catch (error) {
      toast.error(error.message)
    }
  }

  return {
    countries,
    locationInfo,
    changeLocationInfo,
    locations,
    actions: { handleSubmit, handleDelete, handleEdit, handleSelect },
  }
}
