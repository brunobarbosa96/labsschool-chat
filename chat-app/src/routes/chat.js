import { lazy } from 'react'

const ChatContainer = lazy(() => import('../containers/Chat'))

const chat = [
  {
    path: '/',
    component: ChatContainer,
    exact: true
  }
]

export default chat
