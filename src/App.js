import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import ChatBox from "./components/chat-box";
import Sidebar from "./components/sidebar"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGear, faChevronDown, faPlus, faMagnifyingGlass, faFaceSmile, faPaperclip, faPaperPlane, faArrowRight, faPhone, faVideo, faFileLines, faImage, faFilm, faFile } from '@fortawesome/free-solid-svg-icons'
import SecondarySideBar from "./components/secondary-side-bar";
import { AllContext } from "./helper/context"
import { faker } from '@faker-js/faker'

library.add(faPlus ,faGear, faChevronDown, faMagnifyingGlass, faFaceSmile, faPaperclip, faPaperPlane, faArrowRight, faPhone, faVideo, faFileLines, faImage, faFilm, faFile)

function App() {

const avatar = faker.image.avatar()
const group = faker.image.avatar()
const avatar1 = faker.image.avatar()
const avatar2 = faker.image.avatar()
const avatar3 = faker.image.avatar()
const avatar4 = faker.image.avatar()
const avatar5 = faker.image.avatar()
const avatar6 = faker.image.avatar()
const avatar7 = faker.image.avatar()
const avatar8 = faker.image.avatar()
const avatar9 = faker.image.avatar()
const avatar10 = faker.image.avatar()
const avatar11 = faker.image.avatar()
const chatName1 = faker.name.findName()
const chatName2 = faker.name.findName()
const chatName3 = faker.name.findName()
const chatName4 = faker.name.findName()
const chatName5 = faker.name.findName()
const chatName6 = faker.name.findName()
const chatName7 = faker.name.findName()
const chatName8 = faker.name.findName()
const chatName9 = faker.name.findName()
const chatName10 = faker.name.findName()
const chatName11 = faker.name.findName()

  return (
    <Router>
      <AllContext.Provider value={{
        avatar,
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
        }} >
        <div className="app">
          <Sidebar/>
            <Routes>
            <Route path="/" element={<ChatBox ChatName="Family Chat" avatars={group}/>}/>
            <Route path="/1" element={<ChatBox ChatName={chatName1} avatars={avatar1}/>}/>
            <Route path="/2" element={<ChatBox ChatName={chatName2} avatars={avatar2}/>}/>
            <Route path="/3" element={<ChatBox ChatName={chatName3} avatars={avatar3}/>}/>
            <Route path="/4" element={<ChatBox ChatName={chatName4} avatars={avatar4}/>}/>
            <Route path="/5" element={<ChatBox ChatName={chatName5} avatars={avatar5}/>}/>
            <Route path="/6" element={<ChatBox ChatName={chatName6} avatars={avatar6}/>}/>
            <Route path="/7" element={<ChatBox ChatName={chatName7} avatars={avatar7}/>}/>
            <Route path="/8" element={<ChatBox ChatName={chatName8} avatars={avatar8}/>}/>
            <Route path="/9" element={<ChatBox ChatName={chatName9} avatars={avatar9}/>}/>
            <Route path="/10" element={<ChatBox ChatName={chatName10} avatars={avatar10}/>}/>
            <Route path="/11" element={<ChatBox ChatName={chatName11} avatars={avatar11}/>}/>
            </Routes>
          <SecondarySideBar/>
        </div>
      </AllContext.Provider >
    </Router>


  );
}

export default App;
 