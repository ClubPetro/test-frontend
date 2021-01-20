import { Dispatch } from 'redux'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { EngageState } from '../DomainLayer'
import {
  addLocation,
  deleteLocation,
  editLocation,
  listLocations,
} from '../../data/services/location'
import { dateCompare, Location, UpdateLocation } from '../entities/location'
import { toast } from 'react-toastify'

export interface ThunkApi {
  dispatch: Dispatch
  state: EngageState
  rejectValue: string
}

export const getLocationsThunk = createAsyncThunk<Location[], void, ThunkApi>(
  'thunk/location/getLocationsThunk',
  async (_, thunkAPI) => {
    try {
      return await listLocations()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const deleteLocationThunk = createAsyncThunk<
  Location[],
  number,
  ThunkApi
>('thunk/location/deleteLocationThunk', async (payload, thunkAPI) => {
  try {
    await deleteLocation(payload)
    toast.success('Lugar deletado')
    return await listLocations()
  } catch (error) {
    toast.error(error.message)
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const editLocationThunk = createAsyncThunk<
  Location[],
  Location,
  ThunkApi
>('thunk/location/editLocationThunk', async (payload, thunkAPI) => {
  try {
    if (dateCompare(payload.goal)) {
      await editLocation(payload)
      toast.success('Lugar editado')
    } else {
      toast.error('A meta deve ser maior que a data de hoje')
    }
    return await listLocations()
  } catch (error) {
    toast.error(error.message)
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const addLocationThunk = createAsyncThunk<
  Location[],
  UpdateLocation,
  ThunkApi
>('thunk/location/addLocationThunk', async (payload, thunkAPI) => {
  try {
    if (dateCompare(payload.goal)) {
      await addLocation(payload)
      toast.success('Lugar adicionado')
    } else {
      toast.error('A meta deve ser maior que a data de hoje')
    }

    return await listLocations()
  } catch (error) {
    toast.error(error.message)
    return thunkAPI.rejectWithValue(error.message)
  }
})
