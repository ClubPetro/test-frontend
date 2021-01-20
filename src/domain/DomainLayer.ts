import {
  configureStore,
  EnhancedStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import { ReducersMapObject } from 'redux'
import { Persistor } from 'redux-persist/es/types'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  LocationActionsType,
  LocationState,
  locationReducer,
} from './ducks/locationReducer'

export interface EngageState {
  readonly location: LocationState
}

export type EngageActions = LocationActionsType

export type EngageStore = EnhancedStore<EngageState, EngageActions>
const rootReducer: ReducersMapObject<EngageState, EngageActions> = {
  location: locationReducer,
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['mediaDevices', 'events', 'session'],
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer),
)

export const initializeDomainLayer = (
  preloadedState?: EngageState,
): { store: EngageStore; persistor: Persistor } => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    preloadedState,
  })
  const persistor = persistStore(store)
  return { store, persistor }
}
