import { useState, useEffect } from 'react'
import "./miniprofile.css"
const Miniprofile = ({_id}) => {
  const [fullname, setFullname] = useState()
  const [firstCharacter, setFirstCharacter] = useState();
  const [email, setEmail] = useState()

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/user/getUser/"+_id, { 
          method: 'GET', 
          headers: { 'Content-Type' : 'application/json'}})
        const post = await response.json();
        const data = post.data;
        setFullname(data.firstName + " " +data.lastName)
        setEmail(data.email)
        setFirstCharacter(data.firstName.split('')[0])
      } catch (er) {
        console.log(er);
      }
    })()
  },[])

  return (
    <div className='sidebar-friends-box'>
        <div className='sidebar-friends-circle'>{firstCharacter}</div>
        <div className='sidebar-friends-name'>
            <p className='sidebar-friends-fullname'>{fullname}</p>
            <p className='sidebar-friends-username'>{email}</p>
        </div>
    </div>
  )
}

export default Miniprofile