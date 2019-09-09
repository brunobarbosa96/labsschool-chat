import React, { memo } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from '../../routes'

const PageNotFound = () => <Redirect to="/" />
const Main = () => (
  <div>
    <Switch>
      {routes.map(route => <Route key={route.path} {...route} />)}
      <Route component={PageNotFound} />
    </Switch>
  </div>
)
export default memo(Main)
