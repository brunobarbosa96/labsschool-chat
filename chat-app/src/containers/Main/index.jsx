import React, { Suspense, memo } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from '../../routes'

const PageNotFound = () => <Redirect to="/" />
const Main = () => (
  <div>
    <Suspense fallback={<div>Carregando...</div>}>
      <Switch>
        {routes.map(route => <Route key={route.path} {...route} />)}
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  </div>
)
export default memo(Main)
