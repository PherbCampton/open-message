import {Link} from "react-router-dom"
import { AllContext } from '../helper/context'
import { useContext } from 'react'
import ChatList from "./chat-list"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GroupChatList from "./group-chat-list"
import { faker } from '@faker-js/faker'

function ActiveChats() {

  const {
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    avatar10,
    avatar11,
    chatName1,
    chatName2,
    chatName3,
    chatName4,
    chatName5,
    chatName6,
    chatName7,
    chatName8,
    chatName9,
    chatName10,
    chatName11
  } = useContext(AllContext)

  const group = faker.image.avatar()

    return (
      <div className="active-chats">
          <form className="search-form">
            <input type="search" className="search-input" placeholder="Search people"/>
            <button type="submit"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
          </form>

          <Link to="/"><GroupChatList avatar={group}/></Link>
          <Link to="/1"><ChatList chatName={chatName1} avatar={avatar1}/></Link>
          <Link to="/2"><ChatList chatName={chatName2} avatar={avatar2}/></Link>
          <Link to="/3"><ChatList chatName={chatName3} avatar={avatar3}/></Link>
          <Link to="/4"><ChatList chatName={chatName4} avatar={avatar4}/></Link>
          <Link to="/5"><ChatList chatName={chatName5} avatar={avatar5}/></Link>
          <Link to="/6"><ChatList chatName={chatName6} avatar={avatar6}/></Link>
          <Link to="/7"><ChatList chatName={chatName7} avatar={avatar7}/></Link>
          <Link to="/8"><ChatList chatName={chatName8} avatar={avatar8}/></Link>
          <Link to="/9"><ChatList chatName={chatName9} avatar={avatar9}/></Link>
          <Link to="/10"><ChatList chatName={chatName10} avatar={avatar10}/></Link>
          <Link to="/11"><ChatList chatName={chatName11} avatar={avatar11}/></Link>
      </div>
    );
  }
  
  export default ActiveChats;