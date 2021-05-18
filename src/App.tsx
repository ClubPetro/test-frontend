import { QueryClientProvider, QueryClient } from 'react-query'

import { Home } from './pages/Home'

import { CountriesProvider } from './contexts/CountriesContext';
import { PlacesProvider } from './contexts/PlacesContext';

import GlobalStyles from './styles/global'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CountriesProvider>
        <PlacesProvider>
          <GlobalStyles />

          <Home />
        </PlacesProvider>
      </CountriesProvider>
    </QueryClientProvider>
  );
}

export default App;
