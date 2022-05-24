import {useEffect, useState} from 'react'
import "./miniprofilefr.css"
const Miniprofilefr = ({friend_id, _id}) => {
  const [fullname, setFullname] = useState()
  const [firstCharacter, setFirstCharacter] = useState();
  const [email, setEmail] = useState()

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/user/getUser/"+friend_id, { 
          method: 'GET', 
          headers: { 'Content-Type' : 'application/json'}})
        const post = await response.json();
        const data = post.data;
        setFullname(data.firstName + " " +data.lastName);
        setEmail(data.email);
        setFirstCharacter(data.firstName.split('')[0]);
      } catch (er) {
        console.log(er);
      }
    })()
  },[])

  const handleConfirm = async() => {
    console.log("confirm");
    //const response =
    await fetch("/api/user/acceptRequest/"+friend_id+"/"+_id, { 
      method: 'POST', 
      headers: { 'Content-Type' : 'application/json'}})
    // const user = await response.json();
    // console.log(user)
  }

  const handleReject = async() => {
    console.log("reject");
    //const response = 
    await fetch("/api/user/rejectRequest/"+friend_id+"/"+_id, { 
      method: 'POST', 
      headers: { 'Content-Type' : 'application/json'}})
    // const user = await response.json();
    // console.log(user)
  }

  return (
    <div className='sidebar-friendsfr-box'>
        <div className='sidebar-friends-info'>
          <div className='sidebar-friends-circle'>{firstCharacter}</div>
          <div className='sidebar-friends-name'>
              <p className='sidebar-friends-fullname'>{fullname}</p>
              <p className='sidebar-friends-username'>{email}</p>
          </div>
        </div>
        <div className='sidebar-friends-buttons'>
          <button onClick={handleConfirm} className='confirm-button'>
              Confirm
          </button>
          <p>|</p>
          <button onClick={handleReject} className='reject-button'>
              Reject
          </button>
        </div>
    </div>
  )
}

export default Miniprofilefr