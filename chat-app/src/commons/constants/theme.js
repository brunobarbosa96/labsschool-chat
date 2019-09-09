import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    background: {
      level1: '#F4F4F4'
    },
    primary: {
      main: '#3b5998'
    },
    secondary: {
      main: '#8b9dc3',
      light: '#dfe3ee',
      dark: '#f7f7f7',
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
