import {useState, useEffect} from 'react'
import "./friendsuggestion.css"
import { Miniprofilesugg } from '../../components';
import { FaUserPlus } from "react-icons/fa";
import { useUserAppContext } from '../../context/UserContext';

const Friendsuggestion = () => {
  const [users, setUsers] = useState([]);
  const { _id, friendRequest, friends, sentRequest } = useUserAppContext();

  useEffect(() => {
    (async () => {
      try {
        //CANT GET SENT REQUEST DATA
        console.log("sentRequest", sentRequest);
        const idArray = new Array (...friendRequest,_id,...friends)
        const idConstraint = JSON.stringify(idArray)
        // console.log("constraint", idConstraint);
        const response = await fetch("/api/user/getOtherUsers/"+idConstraint, { 
          method: 'GET', 
          headers: { 'Content-Type' : 'application/json'}})
        const user = await response.json();
        const data = user.data;
        setUsers(new Array(...data))
      } catch (er) {
        console.log(er);
      }
    })()
  },[])

  return (
    <div className='friendsuggestion-container'>
        <div className='friendsuggestion-wrapper'>
            <div className='friendsuggestion-firstpart'>
                <FaUserPlus className='friendsuggestion-icon'/>
                <p className='friendsuggestion-text'>Friend Suggestion</p>
            </div>
            <div className='friendsuggestion-secondpart'>
                {users.map((item, index)=> (
                  <Miniprofilesugg 
                    fullname={item.firstName +" "+item.lastName} 
                    email={item.email} 
                    friend_id={item._id}
                    key={item._id + index}/>
                ))}
            </div>
        </div>    
    </div>
  )
}

export default Friendsuggestion