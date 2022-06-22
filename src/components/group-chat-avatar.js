import { faker } from '@faker-js/faker'

function GroupChatAvatar() {

    const PeopleAvatar = faker.image.avatar()
    const PeopleAvatar1 = faker.image.avatar()
    return (
        <>
            <div className='group-avatar-placeholder'>
                <img className='person-avatar1' src={PeopleAvatar} alt='' /> 
                <img className='person-avatar2' src={PeopleAvatar1} alt='' /> 
            </div>  
        </> 

    );
  }
  
  export default GroupChatAvatar;