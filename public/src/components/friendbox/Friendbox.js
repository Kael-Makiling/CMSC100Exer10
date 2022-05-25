import {useEffect, useState} from 'react';
import "./friendbox.css";
import Friendsprofilebox from '../friendsprofilebox/Friendsprofilebox';
const Friendbox = ({friend_id}) => {
  //
  const [firstname, setFirstName] = useState()
  const [lastname, setLastName] = useState()
  const [firstCharacter, setFirstCharacter] = useState();
  const [email, setEmail] = useState()


  // Purpose:
  // 
  useEffect(() => {
    (async () => {
      try {
        //
        const response = await fetch("/api/user/getUser/"+friend_id, { 
          method: 'GET', 
          headers: { 'Content-Type' : 'application/json'}})
        const post = await response.json();
        const data = post.data;

        //Setting of Variable Contents
        setFirstName(data.firstName)
        setLastName(data.lastName)
        setEmail(data.email)
        setFirstCharacter(data.firstName.split('')[0])
      } catch (er) {
        console.log(er);
      }
    })()
  },[])


  return (
    <div className='friendbox-container'>
        <div className='friendbox-wrapper'>
            <div className='friendbox-firstpart'>
                <Friendsprofilebox firstCharacter={firstCharacter} firstName={firstname} lastName={lastname} emai={email} />
            </div>
            <div className='friendbox-secondpart'>
                <button className='friendbox-button'>Add Friend</button>
                <button className='friendbox-button'>View More</button>
            </div>
        </div>
    </div>
  )
}

export default Friendbox