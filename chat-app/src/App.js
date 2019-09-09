import React from 'react'
import { Router } from 'react-router-dom'
import { StylesProvider } from '@material-ui/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { history } from 'commons/utils/router'
import theme from 'constants/theme'
import GlobalStyle from 'commons/styles/global-style'
import Main from './containers/Main'


const App = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
          <Router history={history}>
            <Main />
          </Router>
      </StyledThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
)

export default App
