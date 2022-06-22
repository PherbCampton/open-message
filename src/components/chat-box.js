import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faker } from '@faker-js/faker'
import {useRef} from 'react';
import { useState } from 'react';
import { AllContext } from '../helper/context'
import { useContext } from 'react'

function ChatBox({ChatName, avatars}) {

  const [newMessage, setNewMessage] = useState('')

  const text1 = faker.lorem.sentence()
  const text2 = faker.lorem.sentence()
  const text3 = faker.lorem.sentences()
  const text4 = faker.lorem.sentence()
  const text5 = faker.lorem.sentences()
  const text6 = faker.lorem.sentence()

  const messageInput = useRef(null);
  const {avatar} = useContext(AllContext)

  function handleSubmit (event) {
    messageInput.current.value = setNewMessage
    event.preventDefault()
    messageInput.current.value = ""  
  }

    return (
      <div className="chat-box">
        <div className="chat-box-top-section">
          <h2 className="chat-box-title">{ChatName}</h2>
        </div>
        <div className="message-field">
           <div className="chatbox">
        <div className="message-group-sent">
              <div className="message-sent">
                  <div className="message-sent-text">
                      {text1}
                  </div>
                  <div className="message-sent-status">
                  <img className='people-avatar' src={avatar} alt='' /> 
                  </div>
              </div>
              <div className="message-sent">
                  <div className="message-sent-text">
                    {text6}
                  </div>
                  <div className="message-sent-status"></div>
              </div>
          </div>
          <div className="message-group-received">
              <div>
                  <div className="message-received">
                  <div className="message-received-status">
                  <img className='people-avatar' src={avatars} alt='' /> </div>
                      <div className="message-received-text">
                        {text4}
                      </div>
                  </div>
                  <div className="message-received">
                  <div className="message-received-status">
                  </div>
                      <div className="message-received-text">
                        {text2}
                      </div>
                  </div>
              </div>
          </div>
          <div className="message-group-sent">
              <div className="message-sent">
                  <div className="message-sent-text">
                  {text3}
                  </div>
                  <div className="message-sent-status">
                  <img className='people-avatar' src={avatar} alt='' /> 
                  </div>
              </div>
              <div className="message-sent">
                  <div className="message-sent-text">
                      {text4}
                  </div>
                  <div className="message-sent-status"></div>
              </div>
              <div className="message-sent">
                  <div className="message-sent-text">
                  {text1}
                  </div>
                  <div className="message-sent-status"></div>
              </div>
              <div className="message-sent">
                  <div className="message-sent-text">
                  {text5}
                  </div>
                  <div className="message-sent-status"></div>
              </div>
              <div className="message-sent">
                  <div className="message-sent-text">
                  {text3}
                  </div>
                  <div className="message-sent-status"></div>
              </div>
          </div>
          <div className="message-group-received">
              <div>
                  <div className="message-received">
                  <div className="message-received-status">
                  <img className='people-avatar' src={avatars} alt='' /> </div>
                      <div className="message-received-text">
                        {text1}
                      </div>
                  </div>
                  <div className="message-received">
                  <div className="message-received-status">
                  </div>
                      <div className="message-received-text">
                        {text3}
                      </div>
                  </div>
              </div>
          </div>
          <div className="message-group-received">
              <div>
                  <div className="message-received">
                  <div className="message-received-status">
                  <img className='people-avatar' src={avatars} alt='' /> </div>
                      <div className="message-received-text">
                        {text2}
                      </div>
                  </div>
                  <div className="message-received">
                  <div className="message-received-status">
                  </div>
                      <div className="message-received-text">
                        {text6}
                      </div>
                  </div>
              </div>
          </div>
    </div>
        </div>
        <div className="chat-box-bottom-session">
          <form className='message-box-input-form' onSubmit={handleSubmit}>
              <input ref={messageInput} type="text" className="message-box-input" placeholder="Enter your message here"/>
              <button type='button'><FontAwesomeIcon className='fa-face-smile' icon="fa-solid fa-face-smile" /></button>
              <button type='button'><FontAwesomeIcon className='fa-paperclip' icon="fa-solid fa-paperclip" /></button>
              <button type='submt' className='message-submit-button'><FontAwesomeIcon className='fa-paper-plane' icon="fa-solid fa-paper-plane" /></button>
          </form>
        </div>
      </div>
    );
  }
  
  export default ChatBox;