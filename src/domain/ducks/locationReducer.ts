import {
  createReducer,
  createAction,
  PayloadAction,
  Reducer,
} from '@reduxjs/toolkit'
import { EngageState } from '../DomainLayer'
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction'
import {
  addLocationThunk,
  deleteLocationThunk,
  editLocationThunk,
  getLocationsThunk,
} from '../thunks/locationThunk'
import { Location } from '../entities/location'

export type LocationActionsType = PayloadAction<Location> | PayloadAction<null>

export interface LocationState {
  locations: Location[]
  isLoading: boolean
}

export const LOCATION_INITIAL_STATE: LocationState = {
  locations: [],
  isLoading: false,
}

export const locationSelector = (state: EngageState): LocationState =>
  state.location

export const setLoading: PayloadActionCreator<boolean> = createAction(
  'duck/user/setLoading',
)

function handleGetLocation(
  state: LocationState,
  action: PayloadAction<Location[]>,
): LocationState {
  return {
    ...state,
    locations: action.payload,
    isLoading: false,
  }
}

function handlePendingThunk(state: LocationState): LocationState {
  return {
    ...state,
    isLoading: true,
  }
}

function handleRejectedThunk(state: LocationState): LocationState {
  return {
    ...state,
    isLoading: false,
  }
}

export const locationReducer: Reducer<
  LocationState,
  LocationActionsType
> = createReducer(LOCATION_INITIAL_STATE, {
  [getLocationsThunk.fulfilled.type]: handleGetLocation,
  [getLocationsThunk.pending.type]: handlePendingThunk,
  [getLocationsThunk.rejected.type]: handleRejectedThunk,
  [deleteLocationThunk.fulfilled.type]: handleGetLocation,
  [deleteLocationThunk.pending.type]: handlePendingThunk,
  [deleteLocationThunk.rejected.type]: handleRejectedThunk,
  [editLocationThunk.fulfilled.type]: handleGetLocation,
  [editLocationThunk.pending.type]: handlePendingThunk,
  [editLocationThunk.rejected.type]: handleRejectedThunk,
  [addLocationThunk.fulfilled.type]: handleGetLocation,
  [addLocationThunk.pending.type]: handlePendingThunk,
  [addLocationThunk.rejected.type]: handleRejectedThunk,
})
