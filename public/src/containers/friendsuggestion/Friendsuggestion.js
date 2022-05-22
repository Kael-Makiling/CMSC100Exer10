import React from 'react'
import "./friendsuggestion.css"
import { Miniprofilesugg } from '../../components';
import { FaUserPlus } from "react-icons/fa";
const Friendsuggestion = () => {
  return (
    <div className='friendsuggestion-container'>
        <div className='friendsuggestion-wrapper'>
            <div className='friendsuggestion-firstpart'>
                <FaUserPlus className='friendsuggestion-icon'/>
                <p className='friendsuggestion-text'>Friend Suggestion</p>
            </div>
            <div className='friendsuggestion-secondpart'>
                <Miniprofilesugg />
            </div>
        </div>    
    </div>
  )
}

export default Friendsuggestion