import { faker } from '@faker-js/faker'

function PersonAvatar() {

    const PeopleAvatar = faker.image.avatar()
    const status = faker.datatype.boolean() 
    const styleName = status ? 'person-online-indicator' : 'person-offline-indicator'
    return (
        <div className='person-avatar-placeholder'>
            <img className='person-avatar' src={PeopleAvatar} alt='' /> 
            <div className={styleName}></div>
        </div>
    );
  }
  
  export default PersonAvatar;