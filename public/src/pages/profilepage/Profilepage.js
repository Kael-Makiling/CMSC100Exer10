import {useEffect, useState} from 'react';
import "./profilepage.css";
import { Postbox, Ownpostbox } from '../../components';
import {Creatorbox, Friendsuggestion, Navbar, Sidebar} from '../../containers';
import { useUserAppContext } from '../../context/UserContext';
import { DotLoader } from 'react-spinners';

const Profilepage = () => {
  const { _id, name } = useUserAppContext();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/post/getOwnPost/"+_id, { 
          method: 'GET', 
          headers: { 'Content-Type' : 'application/json'}})
        const post = await response.json();
        const data = post.data;
        setPosts(new Array(...data))
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
          <p className='home-middle-text'>{name}</p>
          <Postbox 
            setValue={(value)=>setPosts(new Array(...posts,value))}
          />
          <div className='home-middle-reversed'>
          {posts.map((item, index)=> (
            <Ownpostbox 
              _id={item._id}
              date={item.createdAt}
              content={item.content}
              createdBy={item.createdBy}
              key={item.createdBy + index}/>
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

export default Profilepage