import React, { PureComponent } from 'react'
import { MessageBoxStyled } from './style'

class MessageBox extends PureComponent {

  render() {
    return (
      <MessageBoxStyled>
        <input />
        <button>
          Enviar
        </button>
      </MessageBoxStyled>
    )
  }
}

export default MessageBox