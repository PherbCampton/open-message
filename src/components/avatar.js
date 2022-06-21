import { AllContext } from '../helper/context'
import { useContext } from 'react'

function Avatar({status}) {

  const {avatar} = useContext(AllContext)


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