import { faker } from '@faker-js/faker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function UserStatus({status}) {
    
    const name = faker.name.findName()
    const job = faker.name.jobTitle()

    return(
        <div className='user-status'>
            <div className='user-status-name-div'>
                <h3 className='user-status-name'>{name}</h3>
                <FontAwesomeIcon className='fa-gear' icon="fa-solid fa-gear" />
            </div>
            <p className='user-status-job'>{job}</p>
            <div className='user-status-indicator-div'>
                {status ? <span className='online-statement'>Online</span> : 
                <span className='offline-statement'>Offline</span>}
                <FontAwesomeIcon className='fa-chevron-down' icon="fa-solid fa-chevron-down" />
            </div>
        </div>
    )
}

export default UserStatus