import { faker } from '@faker-js/faker'

function PeopleAvatar({avatar}) {

    
    const status = faker.datatype.boolean() 
    const styleName = status ? 'people-online-indicator' : 'people-offline-indicator'
    return (
        <div className='people-avatar-placeholder'>
        <img className='people-avatar' src={avatar} alt='' /> 
        <div className={styleName}></div>
     </div>
    );
  }
  
  export default PeopleAvatar;