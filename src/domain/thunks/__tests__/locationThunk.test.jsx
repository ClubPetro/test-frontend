import {
  addLocation,
  deleteLocation,
  editLocation,
  listLocations,
} from '../../../data/services/location'
import { initializeDomainLayer } from '../../DomainLayer'

import {
  addLocationThunk,
  deleteLocationThunk,
  editLocationThunk,
  getLocationsThunk,
} from '../locationThunk'

jest.mock('../../../data/services/location', () => {
  return {
    listLocations: jest.fn(),
    addLocation: jest.fn(),
    deleteLocation: jest.fn(),
    editLocation: jest.fn(),
  }
})

const mockedListLocations = [
  {
    country: 'BRA',
    place: 'Palhoça',
    goal: '11/2030',
    id: 1,
  },
]

const mockedEditedLocations = {
  country: 'BRA',
  place: 'São Paulo',
  goal: '11/2030',
  id: 1,
}

const mockedUpdatedLocation = {
  country: 'USA',
  place: 'Los Angeles',
  goal: '12/2030',
}

const mockedAddedLocation = [
  ...mockedListLocations,
  { ...mockedUpdatedLocation, id: 2 },
]

describe('Locations Thunks', () => {
  let { store } = initializeDomainLayer()

  beforeEach(() => {
    store = initializeDomainLayer().store
    jest.clearAllMocks()
  })

  it('should get all locations', async () => {
    listLocations.mockImplementation(() => Promise.resolve(mockedListLocations))
    const expectedState = {
      locations: mockedListLocations,
      isLoading: false,
    }

    await store.dispatch(getLocationsThunk())
    await expect(store.getState().location).toEqual(expectedState)
  })

  it('should add location', async () => {
    addLocation.mockImplementation(() => Promise.resolve())
    listLocations.mockImplementation(() => Promise.resolve(mockedAddedLocation))
    const expectedState = {
      locations: mockedAddedLocation,
      isLoading: false,
    }
    await store.dispatch(addLocationThunk(mockedUpdatedLocation))
    await expect(store.getState().location).toEqual(expectedState)
  })

  it('should remove location', async () => {
    deleteLocation.mockImplementation(() => Promise.resolve())
    listLocations.mockImplementation(() => Promise.resolve(mockedListLocations))
    const expectedState = {
      locations: mockedListLocations,
      isLoading: false,
    }
    await store.dispatch(deleteLocationThunk(2))
    await expect(store.getState().location).toEqual(expectedState)
  })

  it('should edit location', async () => {
    editLocation.mockImplementation(() => Promise.resolve())
    listLocations.mockImplementation(() =>
      Promise.resolve([mockedEditedLocations]),
    )
    const expectedState = {
      locations: [mockedEditedLocations],
      isLoading: false,
    }
    await store.dispatch(editLocationThunk(mockedEditedLocations))
    await expect(store.getState().location).toEqual(expectedState)
  })
})
