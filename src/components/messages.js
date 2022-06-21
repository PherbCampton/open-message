import { AllContext } from '../helper/context'
import { useContext } from 'react'
import { faker } from '@faker-js/faker'


export default function Messages() {
    const avatars = faker.image.avatar()

    const {avatar} = useContext(AllContext)

    return(
    <div className="chatbox">
      <div className="message-group-sent">
            <div className="message-sent">
                <div className="message-sent-text">
                    Hello Franky!
                </div>
                <div className="message-sent-status">
                <img className='people-avatar' src={avatar} alt='' /> 
                </div>
            </div>
            <div className="message-sent">
                <div className="message-sent-text">
                    How are you doing today?
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
                        Hi George! Nice to hear you again! 
                    </div>
                </div>
                <div className="message-received">
                <div className="message-received-status">
                </div>
                    <div className="message-received-text">
                        Im fine, thank you! And what about you? is everything ok?
                    </div>
                </div>
            </div>
        </div>
        <div className="message-group-sent">
            <div className="message-sent">
                <div className="message-sent-text">
                    Hello Franky!
                </div>
                <div className="message-sent-status">
                <img className='people-avatar' src={avatar} alt='' /> 
                </div>
            </div>
            <div className="message-sent">
                <div className="message-sent-text">
                    How are you doing today?
                </div>
                <div className="message-sent-status"></div>
            </div>
            <div className="message-sent">
                <div className="message-sent-text">
                    How are you doing today?
                </div>
                <div className="message-sent-status"></div>
            </div>
            <div className="message-sent">
                <div className="message-sent-text">
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                </div>
                <div className="message-sent-status"></div>
            </div>
            <div className="message-sent">
                <div className="message-sent-text">
                    How are you doing today?
                </div>
                <div className="message-sent-status"></div>
            </div>
        </div>
        
    </div>
    )
}

// <div>
// <section class="chatbox">
//     <ul id="message">
//         <div class="time"><p></p></div>
//         <div class="matt-line"><p>Hello Franky!</p>
//         <p>Hello Franky!</p>
//         <p>Hello Franky!</p>
//         <p>Hello Franky!</p>
//     </div>
//         <li class="first">Hey Franky!.</li>
//         <li class="first">Hey Franky!.</li>
//         <li class="first">You gotteh be kiddin mi.</li>
//         <li class="first">You gotteh be kiddin mi.</li>
//     </ul>
// </section>
// </div>