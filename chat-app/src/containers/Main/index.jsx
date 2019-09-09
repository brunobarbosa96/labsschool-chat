import React, { Suspense, memo } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from '../../routes'
import { ContentStyled } from './style'

const PageNotFound = () => <Redirect to="/" />
const Main = () => (
  <ContentStyled>
    <Suspense fallback={<div>Carregando...</div>}>
      <Switch>
        {routes.map(route => <Route key={route.path} {...route} />)}
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  </ContentStyled>
)
export default memo(Main)
