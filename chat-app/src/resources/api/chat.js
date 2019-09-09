import api from './base-api'

const baseApi = api(`${process.env.url}/api`)

const Chat = {
  request(path, options, isLoading) {
    return baseApi.request(path, options, isLoading)
  }
}

export default Chat
