import React from 'react'
import { Persistor } from 'redux-persist'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { EngageStore } from '../domain/DomainLayer'
import { defaultTheme } from './layout/theme'
import { Main } from './Main'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  html {
    font-size: 62.5%;
  }
  body {
    background-color: white;
    font-family: 'Roboto', sans-serif !important;
    margin: 0;
  }
`

export function initializePresentationLayer(
  store: EngageStore,
  persistor: Persistor,
): React.FC {
  const App: React.FC = () => (
    <ThemeProvider theme={defaultTheme}>
      <Main store={store} persistor={persistor} />
      <GlobalStyle />
    </ThemeProvider>
  )
  return App
}
