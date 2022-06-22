import { faker } from '@faker-js/faker'
import GroupChatAvatar from "./group-chat-avatar"


function GroupChatList() {
    
    const personName = faker.name.findName()
    const personName1 = faker.name.findName()
    const lastMessage = faker.lorem.sentence().slice(0, 26)+'...'
    const groupChatName = `${personName}, ${personName1} `
    const groupChatNameDisplay = groupChatName.slice(0, 20)+' ...'
 

    return (
      <div className="chat-list">
        <GroupChatAvatar/>
        <div className="chat-list-content">
            <div className="chat-list-texts">
                <p className="chat-list-person-name">{groupChatNameDisplay}</p>
                <div className="unread-messages">3</div>
            </div>
            <p className="chat-list-last-message">{lastMessage}</p>
        </div>
      </div>
    );
  }
  
  export default GroupChatList;