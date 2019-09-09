import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    background: {
      level1: '#F4F4F4'
    },
    primary: {
      main: '#0086FF'
    },
    secondary: {
      main: '#59C00B',
      light: '#86D14D',
      dark: '#295805',
      contrastText: '#FFF'
    },
    error: {
      main: '#E25335'
    },
    warning: {
      main: '#FFA012',
      contrastText: '#FFF'
    },
    success: {
      main: '#59C00B',
      contrastText: '#FFF'
    }
  },
  typography: {
    border: 'rgba(0, 0, 0, 0.42)',
    label: '#404040'
  }
})

export default theme
