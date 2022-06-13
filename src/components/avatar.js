import { faker } from '@faker-js/faker'

function Avatar({status}) {

  const avatar = faker.image.avatar()
  const styleName = status ? 'online-indicator' : 'offline-indicator'
    return (
      <div>
        <div className='avatar-placeholder'>
           <img className='avatar' src={avatar} alt='' /> 
           <div className={styleName}></div>
        </div>
      </div>
    );
  }
  
  export default Avatar;