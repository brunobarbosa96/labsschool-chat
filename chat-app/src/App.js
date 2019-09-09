import React, { Fragment } from 'react'
import { Router } from 'react-router-dom'
import { StylesProvider } from '@material-ui/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { history } from 'commons/utils/router'
import theme from 'commons/constants/theme'
import GlobalStyle from 'commons/styles/global-style'
import Main from './containers/Main'


const App = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <Fragment>
          <CssBaseline />
          <GlobalStyle />
          <Router history={history}>
            <Main />
          </Router>
        </Fragment>
      </StyledThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
)

export default App
