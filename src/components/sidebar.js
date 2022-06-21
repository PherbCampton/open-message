import ActiveChats from "../components/active-chats"
import UserTab from "../components/user-tab"


function Sidebar() {

  return (
    <div className="sidebar">
        <UserTab/>
        <ActiveChats/>
    </div>
  );
}

export default Sidebar;
 