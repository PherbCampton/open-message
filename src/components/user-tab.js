import Avatar from "../components/avatar"
import Header from "../components/header"
import UserStatus from "../components/user.status"
import { faker } from '@faker-js/faker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function UserTab() {

  const status = faker.datatype.boolean() 

  
    return (
      <div>
          <Header/>
            <div className="user-layout">
          <Avatar status={status}/>
          <UserStatus status={status}/>
            </div>
            <div className="active-chats-title-div"> 
              <p className="active-chats-title">Active Chats</p>
              <FontAwesomeIcon className="fa-plus" icon="fa-solid fa-plus" />
            </div>
            
      </div>
    );
  }
  
  export default UserTab;