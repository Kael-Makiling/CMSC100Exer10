import React, { useState, useEffect } from "react";
import "./home.css";
import { Postbox, Timelinebox } from "../../components";
import { DotLoader } from 'react-spinners';
import {
  Creatorbox,
  Friendsuggestion,
  Navbar,
  Sidebar,
} from "../../containers";
import { useUserAppContext } from '../../context/UserContext';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { _id, friends} = useUserAppContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const idArray = new Array (_id,...friends)
        console.log("idArray", idArray)
        const constraint = JSON.stringify(idArray)
        const response = await fetch("/api/post/getPost/"+constraint, { 
          method: 'GET', 
          headers: { 'Content-Type' : 'application/json'}})
        const post = await response.json();
        const data = post.data;
        setPosts(new Array(...data))
        setTimeout(()=>{
          setLoading(false);
        },1000)
        // console.log(post)
        // console.log(data);
      } catch (er) {
        console.log(er);
      }
    })()
  },[])

  return (
    <div className="home-container">
      {
        loading ? 
        <div className="centeredSpinner">
            <DotLoader
            size={80}
            color={'#4f4a47'}
            loading={loading}/>
        </div>
        :
        <div>
          <Navbar />
          <div className="home-wrapper">
            <div className="home-left">
              <Sidebar />
            </div>
            <div className="home-middle">
              <p className="home-middle-text">HOME FEED</p>
              <Postbox />
              <div className="home-middle-reversed">
                {posts.map((item, index)=> (
                  <Timelinebox _id={item.createdBy} date={item.createdAt} content={item.content} key={item.createdBy + index}/>
                ))}
              </div>
            </div>
            <div className="home-right">
              <div className="home-right-contents">
                <Creatorbox />
                <Friendsuggestion />
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
