import { PropsWithChildren } from 'react';
import { PlacesProvider } from './usePlaces';
import { ToastProvider } from './useToast';

export default function AppProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <PlacesProvider>
      <ToastProvider>{children}</ToastProvider>
    </PlacesProvider>
  );
}
