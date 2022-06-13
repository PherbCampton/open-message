import { faker } from '@faker-js/faker'
import { FontAwesomeIcon as FontAwesome } from '@fortawesome/react-fontawesome'
import { faGears } from '@fortawesome/free-solid-svg-icons'


function UserStatus({status}) {
    
    const name = faker.name.findName()
    const job = faker.name.jobTitle()

    return(
        <div className='user-status'>
            <h3 className='user-status-name'>{name}</h3>
            <p className='user-status-job'>{job}</p>
            {status ? <span className='online-statement'>Online</span> : 
            <span className='offline-statement'>Offline</span>}
            <FontAwesome icon={faGears} />
        </div>
    )
}

export default UserStatus