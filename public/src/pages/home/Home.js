import React, { useState, useEffect } from "react";
import "./home.css";
import { Postbox, Timelinebox } from "../../components";
import DotLoader from 'react-spinners/DotLoader';
import {
  Creatorbox,
  Friendsuggestion,
  Navbar,
  Sidebar,
} from "../../containers";
import { useUserAppContext } from '../../context/UserContext';

//PURPOSE: This page shows the post of the user as well as other users posts
const Home = () => {
  //All
  const {firstName, lastName, email, _id, friends} = useUserAppContext();
  const [loading, setLoading] = useState(true);
  const [tempFriends, setTempFriends] = useState([])
  const [tempFriendRequest, setTempFriendRequest] = useState([])
  const [tempPendingRequest, setTempPendingRequest] = useState([])
  const [method,setMethod] = useState(1); //If 1 Posting will be from Home

  //Left SideBar
  const [numPost, setNumPost] = useState(0);

  //Middle
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        //Get Posts
        const idArray = new Array (_id,...friends)
        const constraint = JSON.stringify(idArray)
        const response = await fetch("/api/post/getPost/"+constraint, { 
          method: 'GET', 
          headers: { 'Content-Type' : 'application/json'}})
        const post = await response.json();
        const data = post.data;

        //Get Posts Contents
        await Promise.all(data.map(async(item, key)=>{
          const response2 = await fetch("/api/user/getUser/"+item.createdBy, { 
            method: 'GET', 
            headers: { 'Content-Type' : 'application/json'}})
          const user = await response2.json();
          const userData = user.data;

          return({
            createdAt: item.createdAt,
            content: item.content,
            fullName: userData.name,
            email: userData.email,
            oneChar: userData.name.split('')[0]
          })
        })).then((value)=>{setPosts(value)})
        
        //Get Self Contents
        const response2 = await fetch("/api/user/getUser/"+_id, { 
          method: 'GET', 
          headers: { 'Content-Type' : 'application/json'}})
        const self = await response2.json();
        const dataSelf = self.data;
        setTempFriends(dataSelf.friends)
        setTempFriendRequest(dataSelf.friendRequest)
        setTempPendingRequest(dataSelf.pendingRequest)

        //For Numpost
        let counter = 0;
        for(let i = 0; i < data.length; i++){
          if(data[i].createdBy === _id){
            counter++;
          }
        }
        setNumPost(counter)

      } catch (er) {
        console.log(er);
      }
      setLoading(false)
    })()
  },[])

  return (
    <div className="home-container">
          <Navbar />
          { loading ? 
          <div className="centeredSpinner">
              <DotLoader
              size={80}
              color={'#4f4a47'}
              loading={loading}
              />
          </div> : <div>
          <div className="home-wrapper">
            <div className="home-left">
              <Sidebar 
                firstName={firstName}
                lastName={lastName}
                email={email}
                _id={_id}
                friends={tempFriends}
                friendRequest={tempFriendRequest}
                numPost={numPost}
              />
            </div>
            <div className="home-middle">
              <p className="home-middle-text">HOME FEED</p>
              <Postbox
                updatePost={(value)=>setPosts(new Array(...posts,value))}
                setNumPost={(value)=>setNumPost(value)}
                numPost={numPost}
                method={method}
              />
              <div className="home-middle-reversed">
                {posts.map((item, index)=> (
                  <Timelinebox 
                    date={item.createdAt} 
                    content={item.content}
                    fullName={item.fullName}
                    email={item.email}
                    oneChar={item.oneChar}
                    key={item.createdAt + item.content + index}
                  />
                ))}
              </div>
            </div>
            <div className="home-right">
              <div className="home-right-contents">
                <Creatorbox />
                    <Friendsuggestion 
                    friendRequest={tempFriendRequest}
                    _id={_id}
                    friends={friends}
                    tempPendingRequest={tempPendingRequest}
                    setTempPendingRequest={(value)=>setTempPendingRequest(value)}
                  />
                <div className='home-right-ad'>
                  <div className="home-right-suggested">
                    <div className="suggested-container"> 
                      <p className="suggested-header-text">Music</p>
                      <p className="suggested-text-small">	• Suggested for you</p>
                    </div>
                    <div className="suggested-photo"></div>
                    <p className="suggested-header-text">Blackpink</p>
                    <p className="suggested-text-small">As if it's your Last</p>
                    <button>Listen</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Home;
