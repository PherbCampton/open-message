import PeopleAvatar from "./people-avatar"
import { faker } from '@faker-js/faker'


function ChatList() {
    
    const personName = faker.name.findName()
    const lastMessage = faker.lorem.sentence().slice(0, 26)+'...'
    const time = faker.date.weekday()


    return (
      <div className="chat-list">
        <PeopleAvatar/>
        <div className="chat-list-content">
            <div className="chat-list-texts">
                <p className="chat-list-person-name">{personName}</p>
                <time className="chat-list-time">{time}</time>
            </div>
            <p className="chat-list-last-message">{lastMessage}</p>
        </div>
      </div>
    );
  }
  
  export default ChatList;