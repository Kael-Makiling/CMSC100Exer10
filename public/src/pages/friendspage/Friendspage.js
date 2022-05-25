import React, {useState, useEffect} from 'react';
import "./friendspage.css";

import { Navbar, Sidebar, Friendsuggestion, Creatorbox } from '../../containers';
import { Friendbox } from '../../components';
import { useUserAppContext } from "../../context/UserContext";
import { DotLoader } from 'react-spinners';

const Friendspage = () => {
  const { friends } = useUserAppContext();
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false);
    },1000)
  },[])

  return (
    <div className='search-container'>
      <Navbar />
      {
        loading ? 
        <div className="centeredSpinner">
            <DotLoader
            size={80}
            color={'#4f4a47'}
            loading={loading}/>
        </div>
        :
      <div className='search-wrapper'>
        <div className='search-left'>
          <Sidebar/>
        </div>
        <div className='search-middle'>
          <p className='search-middle-text'>Friends</p>
          <div className='search-middle-friendbox'>
          {friends.map((item, index)=> (
          <Friendbox
            friend_id={item} 
            key={item + index}/>
          ))}
          </div>
        </div>
        <div className='search-right'>
          <div className='search-right-contents'>
            <Creatorbox />
            <Friendsuggestion />
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Friendspage