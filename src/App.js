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


  return (
    <AllContext.Provider value={{avatar}} >
      <div className="app">
        <Sidebar/>
        <ChatBox/>
        <SecondarySideBar/>
    </div>
    </AllContext.Provider >

  );
}

export default App;
 