import PeopleAvatar from "./people-avatar"
import { faker } from '@faker-js/faker'


function ChatList({chatName, avatar}) {
    
    const lastMessage = faker.lorem.sentence().slice(0, 26)+'...'
    const time = faker.date.weekday()
    


    return (
      <div className="chat-list" tabIndex="0">
        <PeopleAvatar avatar={avatar}/>
        <div className="chat-list-content">
            <div className="chat-list-texts">
                <p className="chat-list-person-name">{chatName}</p>
                <time className="chat-list-time">{time}</time>
            </div>
            <p className="chat-list-last-message">{lastMessage}</p>
        </div>
      </div>
    );
  }
  
  export default ChatList;