import Api from './api/chat'

const path = '/api'

const Chat = {
  save(data) {
    return Api.request(`${path}/`, { data, method: 'POST' })
  }
}

export default Chat
