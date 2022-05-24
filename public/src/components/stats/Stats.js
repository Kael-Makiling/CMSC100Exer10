import {useState, useEffect} from 'react'
import "./stats.css";
import { useUserAppContext } from '../../context/UserContext';
const Stats = () => {
  const { _id, friendRequest, friends } = useUserAppContext();
  const [numPost, setNumPost] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/post/getOwnPost/"+_id, { 
          method: 'GET', 
          headers: { 'Content-Type' : 'application/json'}})
        const user = await response.json();
        const data = user.data;
        console.log("postdata",data);
        setNumPost(data.length)
      } catch (er) {
        console.log(er);
      }
    })()
  },[])

  return (
    <div className='sidebar-stats'>
    <div className='sidebar-stats-box'>
        <p className='sidebar-stats-text'> POST </p>
        <p className='sidebar-stats-number'>{numPost}</p>
    </div>
    <div className='sidebar-stats-box'>
        <p className='sidebar-stats-text'> FRIENDS </p>
        <p className='sidebar-stats-number'>{friends.length}</p>
    </div>
    <div className='sidebar-stats-box'>
        <p className='sidebar-stats-text'> REQUESTS </p>
        <p className='sidebar-stats-number'>{friendRequest.length}</p>
    </div>
</div>
  )
}

export default Stats