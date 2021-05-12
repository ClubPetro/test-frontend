import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import api from '../services/api';

export interface Place {
  id: number;
  flag: string;
  country: string;
  local: string;
  goal: string;
}

interface PlaceContextData {
  places: Place[];
  setPlaces(places: Place[]): void;
}

const ContextOfPlaces = createContext({} as PlaceContextData);

export function PlacesProvider({ children }: PropsWithChildren<unknown>) {
  const [places, setPlaces] = useState<Place[]>([]);

  const getData = useCallback(async () => {
    const response = await api.get('places');

    setPlaces(response.data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <ContextOfPlaces.Provider value={{ places, setPlaces }}>
      {children}
    </ContextOfPlaces.Provider>
  );
}

export function usePlaces() {
  const context = useContext(ContextOfPlaces);

  if (!context) {
    throw new Error('usePlace must be within a PlaceProvider.');
  }

  return context;
}
