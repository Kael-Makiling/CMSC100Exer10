import {useEffect, useState} from 'react';
import "./friendsprofilepage.css";
import { Timelinebox } from '../../components';
import {Creatorbox, Friendsuggestion, Navbar, Sidebar} from '../../containers';
import {useLocation} from 'react-router-dom';
import { DotLoader } from 'react-spinners';

const Friendsprofilepage = () => {
  const [posts, setPosts] = useState([]);
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/post/getOwnPost/"+state.id, { 
          method: 'GET', 
          headers: { 'Content-Type' : 'application/json'}})
        const post = await response.json();
        const data = post.data;
        setPosts(new Array(...data))
        console.log(post)
        console.log(data);
        setTimeout(()=>{
          setLoading(false);
        },1000)
      } catch (er) {
        console.log(er);
      }
    })()
  },[posts])

  return (
    <div className='home-container'>
      {console.log("posts", posts)}
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
      <div className='home-wrapper'>
        <div className='home-left'>
          <Sidebar/>
        </div>
        <div className='home-middle'>
          <p className='home-middle-text'>{state.name}</p>
          <div className='home-middle-reversed'>
          {posts.map((item, index)=> (
            <Timelinebox _id={item.createdBy} date={item.createdAt} content={item.content} key={item.createdBy + index}/>
          ))}
          </div>
        </div>
        <div className='home-right'>
          <div className='home-right-contents'>
            <Creatorbox />
            <Friendsuggestion />
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Friendsprofilepage