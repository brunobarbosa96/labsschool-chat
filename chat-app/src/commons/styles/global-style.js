import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  html {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  body {
    line-height: normal;margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    display: flex;
  }

  strong,
  b {
    font-weight: 500;
  }

  .flex {
    display: flex;
  }

  .flex-1 {
    flex: 1;
  }

  .overflow-y {
    overflow-y: auto;
  }

`

export default globalStyle
