import React from 'react';
import "./postbox.css";
const Postbox = () => {
  return (
    <div className='postbox-container'>
        <div className='postbox-wrapper'>
            <p className='postbox-header'>Write a new Post</p>
            <div className='postbox-post'>
                <div className='postbox-circle'>M</div>
                <input className='postbox-input'/>
            </div>
            <hr className='postbox-line'></hr>
            <div className='postbox-button'> 
                <button className='postbox-postbutton'>
                    Post
                </button>
            </div>
        </div>
    </div>
  )
}

export default Postbox