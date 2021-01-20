import React, { Suspense } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Home } from './routes/Home'

export enum ROUTES {
  HOME = '/',
}

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
