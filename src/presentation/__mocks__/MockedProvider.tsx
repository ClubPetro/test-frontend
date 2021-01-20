import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { EngageStore } from '../../domain/DomainLayer'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../layout/theme'

type MockedProviderType = {
  children: React.ReactNode
  store: EngageStore
}

export const MockedProvider: React.FC<MockedProviderType> = (
  props: MockedProviderType,
) => {
  const { children, store } = props
  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    </ThemeProvider>
  )
}
