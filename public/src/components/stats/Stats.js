import React from 'react'
import "./stats.css";
const Stats = () => {
  return (
    <div className='sidebar-stats'>
    <div className='sidebar-stats-box'>
        <p className='sidebar-stats-text'> POST </p>
        <p className='sidebar-stats-number'> 90 </p>
    </div>
    <div className='sidebar-stats-box'>
        <p className='sidebar-stats-text'> FRIENDS </p>
        <p className='sidebar-stats-number'> 90 </p>
    </div>
    <div className='sidebar-stats-box'>
        <p className='sidebar-stats-text'> REQUESTS </p>
        <p className='sidebar-stats-number'> 90 </p>
    </div>
</div>
  )
}

export default Stats