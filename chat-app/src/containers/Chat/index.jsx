import React, { PureComponent } from 'react'
import { LoremIpsum } from "lorem-ipsum"
import { Card, CardContent } from 'components'
import { ContentStyled, UsersStyled, MessageStyled, ContentMessageStyled } from './style'
import MessageBox from './MessageBox'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

const users = [
  {
    text: lorem.generateWords(Math.floor(Math.random(), (1, 20) + 1))
  },
  {
    text: lorem.generateWords(Math.floor(Math.random(), (1, 20) + 1))
  },
  {
    text: lorem.generateWords(Math.floor(Math.random(), (1, 20) + 1))
  },
  {
    text: lorem.generateWords(Math.floor(Math.random(), (1, 20) + 1))
  }
]

class Chat extends PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.setState(users)
  }

  renderMessages = (element, index) => {
    return (
      <ContentMessageStyled key={`message-${index}`}>
        <UsersStyled>
          <img src="https://i.pravatar.cc/50" />
        </UsersStyled>
        <MessageStyled>
          {element.text}
        </MessageStyled>
      </ContentMessageStyled>
    )
  }

  render() {
    return (
      <ContentStyled>
        <Card>
          <CardContent>
            {users.length > 0 && users.map(this.renderMessages)}
          </CardContent>
        </Card>
        <MessageBox />
      </ContentStyled>
    )
  }
}

export default Chat
