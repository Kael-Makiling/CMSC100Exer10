import React, {useState} from 'react';
import "./postbox.css";
import {useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { PostSchema } from '../../assets/schema';
import { useUserAppContext } from '../../context/UserContext';


const Postbox = ({setValue}) => {
  const {register, handleSubmit, reset} = useForm({ resolver: yupResolver(PostSchema)});
  const {_id, firstName} =useUserAppContext();
  // const [post, setPost] = useState();
  
  const submitForm = async(data) => {
    const newDate = new Date();

    const postBody = {createdAt:newDate, content: data.content, createdBy:_id}
    await fetch("/api/post", {method: 'POST', body: JSON.stringify(postBody), headers: { 'Content-Type' : 'application/json'}});

    setValue(data.content)
    console.log(setValue)
    console.log(data.content)
    reset();
  }

  // const handlePost = (event) => {
  //   const content = event.target.value;
  //   setPost(content)

  //   console.log(content)
  // }

  return (
    <div className='postbox-container'>
        <div className='postbox-wrapper'>
            <form onSubmit={handleSubmit(submitForm)}>
                <p className='postbox-header'>Write a new Post</p>
                <div className='postbox-post'>
                    <div className='postbox-circle'>{firstName.split('')[0]}</div>
                    <input 
                      placeholder="What's on your mind?"
                      className='postbox-input'
                      // onChange={handlePost} 
                      {...register('content')}
                    />  
                </div>
                <hr className='postbox-line'></hr>
                <div className='postbox-button'> 
                    <button 
                    // onClick={()=>setValue(post)}
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Postbox