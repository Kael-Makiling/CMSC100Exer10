import React from 'react'
import "./miniprofilesugg.css"
import {FaPlusCircle} from "react-icons/fa"; 
const Miniprofilesugg = () => {
  return (
    <div className='sidebar-friendsugg-box'>
        <div className='sidebar-friends-circle'>M</div>
        <div className='sidebar-friends-name'>
            <p className='sidebar-friends-fullname'>Michael Jay Makiling</p>
            <p className='sidebar-friends-username'>@michaeljay</p>
        </div>
        <FaPlusCircle className='miniprofilesugg-icon'/>
    </div>
  )
}

export default Miniprofilesugg