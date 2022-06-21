import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PersonAvatar from './person-avatar'


export default function SecondarySideBar() {
    return (
        <div className="secondary-sidebar">
            <div className='file-divs-top'> 
                <FontAwesomeIcon className='file-icons fa-arrow-right' icon="fa-solid fa-arrow-right" />
            </div>
            <PersonAvatar/>
            <div className='green-icon-div'>
                <FontAwesomeIcon icon="fa-solid fa-phone" />
            </div>
            <div className='red-icon-div'>
            <FontAwesomeIcon icon="fa-solid fa-video" />
            </div>
            <p className="secondary-sidebar-p">People</p>
            <PersonAvatar/>
            <PersonAvatar/>
            <PersonAvatar/>
            <p className="secondary-sidebar-p">Files</p>
            <div className='file-divs'> 
                <FontAwesomeIcon className='file-icons' icon="fa-solid fa-file-lines" />
            </div>
            <div className='file-divs'>
                <FontAwesomeIcon className='file-icons' icon="fa-solid fa-image" />
            </div>
            <div className='file-divs'>
                <FontAwesomeIcon className='file-icons' icon="fa-solid fa-film" />
            </div>
            <div className='file-divs'>
                <FontAwesomeIcon className='file-icons' icon="fa-solid fa-file" />
            </div>
        </div>
    )
}