import ChatList from "./chat-list"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ActiveChats() {

    return (
      <div className="active-chats">
          <form className="search-form">
            <input type="search" className="search-input" placeholder="Search people"/>
            <button type="submit"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
          </form>

          <ChatList/>
          <ChatList/>
          <ChatList/>
          <ChatList/>
          <ChatList/>
          <ChatList/>
          <ChatList/>
          <ChatList/>
          <ChatList/>
          <ChatList/>
          <ChatList/>
      </div>
    );
  }
  
  export default ActiveChats;