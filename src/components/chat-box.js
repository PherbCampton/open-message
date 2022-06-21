import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Messages from './messages';


function ChatBox() {

  function handleSubmit (event) {
    event.preventDefault()
    (event.target.value)
    console.log('You clicked submit')
}

    return (
      <div className="chat-box">
        <div className="chat-box-top-section">
          <h2 className="chat-box-title">Family chat</h2>
        </div>
        <div className="message-field">
          <Messages/>
        </div>
        <div className="chat-box-bottom-session">
          <form className='message-box-input-form' onSubmit={handleSubmit}>
              <input type="text" className="message-box-input" placeholder="Enter your message here"/>
              <button type='button'><FontAwesomeIcon className='fa-face-smile' icon="fa-solid fa-face-smile" /></button>
              <button type='button'><FontAwesomeIcon className='fa-paperclip' icon="fa-solid fa-paperclip" /></button>
              <button type='submt' className='message-submit-button'><FontAwesomeIcon className='fa-paper-plane' icon="fa-solid fa-paper-plane" /></button>
          </form>
        </div>
      </div>
    );
  }
  
  export default ChatBox;