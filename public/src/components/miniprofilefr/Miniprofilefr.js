import React from 'react'
import "./miniprofilefr.css"
const Miniprofilefr = () => {
  return (
    <div className='sidebar-friendsfr-box'>
        <div className='sidebar-friends-info'>
          <div className='sidebar-friends-circle'>M</div>
          <div className='sidebar-friends-name'>
              <p className='sidebar-friends-fullname'>Michael Jay Makiling</p>
              <p className='sidebar-friends-username'>@michaeljay</p>
          </div>
        </div>
        <div className='sidebar-friends-buttons'>
          <button className='confirm-button'>
              Confirm
          </button>
          <p>|</p>
          <button className='reject-button'>
              Reject
          </button>
        </div>
    </div>
  )
}

export default Miniprofilefr