import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import AppProvider from './hooks';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import PlacesContainer from './components/PlacesContainer';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Header />
        <main>
          <PlacesContainer />
        </main>
      </AppProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
