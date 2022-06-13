import Avatar from "./components/avatar"
import Header from "./components/header"
import UserStatus from "./components/user.status"
import { faker } from '@faker-js/faker'


function App() {

  const status = faker.datatype.boolean() 
  
  return (
    <div>
        <Header/>
          <div className="user-layout">
        <Avatar status={status}/>
        <UserStatus status={status}/>
          </div>
    </div>
  );
}

export default App;
