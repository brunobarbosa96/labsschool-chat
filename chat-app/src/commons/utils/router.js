import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

const push = (path, state) => history.push(path, state)

const replace = (path, state) => history.replace(path, state)

export default {
  push,
  replace
}
