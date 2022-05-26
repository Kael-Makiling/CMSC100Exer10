import React, {useState, useEffect} from 'react'
import "./sidebar.css";
import { useUserAppContext } from '../../context/UserContext';
import { Profilebox, Stats, Addfriend, Friendrequest } from '../../components'


const Sidebar = () => {
  const {firstName, lastName, email, _id, friendRequest, friends} = useUserAppContext();
  const [friendsArray, setFriendsArray] = useState([]);
  const [friendRequestArray, setfriendRequestArray] = useState([]);
  const [tempUser, setTempUser] = useState("")
  const [acceptState, setAcceptState] = useState("") //If 1 - Accept, 2 - Reject

  const handleAccept = () => {
    console.log("accept");
    console.log("friend_id", tempUser)
    var tempArray = [...friendRequestArray]; // make a separate copy of the array
    var index = tempArray.indexOf(tempUser)
    if (index !== -1) {
      tempArray.splice(index, 1);
      setfriendRequestArray(new Array (...tempArray));
    }

    //Add Friend to Friends Array
    setFriendsArray(new Array (...friendsArray, tempUser))
  }

  const handleReject = () => {
    var tempArray = [...friendRequestArray]; // make a separate copy of the array
    var index = tempArray.indexOf(tempUser)
    if (index !== -1) {
      tempArray.splice(index, 1);
      setfriendRequestArray(new Array (...tempArray));
    }
  }
  useEffect(() => {
    (async () => {
      try {
        if (friendRequestArray.length === 0){
          setFriendsArray(new Array(...friends))
          setfriendRequestArray(new Array(...friendRequest))
        } else {
          if (acceptState === "1"){
            handleAccept()
          }else{
            handleReject()
          }
        }
      } catch (er) {
        console.log(er);
      }
    })()
  },[tempUser])

  return (
    <div className='sidebar-container'>
        <div className='sidebar-wrapper'>
            <Profilebox 
              firstName={firstName}
              lastName={lastName}
              email={email}
            />

            <Stats 
              _id={_id}
              friendRequest={friendRequestArray}
              friends={friendsArray}
            />

            <div className='sidebar-wrapper-contents'>

            {(friendsArray.length !== 0 ?
              <div>
                <Addfriend 
                friends={friendsArray}            
                />
              </div> : <div></div>
            )}

            {(friendRequestArray.length !== 0 ?
              <div>
                <Friendrequest
                _id={_id}
                friendRequest={friendRequestArray}
                setValue={(value)=>setTempUser(value)}
                setState={(value)=>setAcceptState(value)}
                />
              </div> : <div></div>
            )}

            </div>
            
        </div>
    </div>
  )
}

export default Sidebar