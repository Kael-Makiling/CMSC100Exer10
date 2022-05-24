import React, {useState} from 'react';
import "./postbox.css";
import {useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { PostSchema } from '../../assets/schema';
import { useUserAppContext } from '../../context/UserContext';

const Postbox = () => {
  const {register, handleSubmit, reset} = useForm({ resolver: yupResolver(PostSchema)});
  const {_id, firstName} =useUserAppContext();
  const [ loading, setloading] = useState(false);
  
  const submitForm = async(data) => {
    setloading(true);

    const newDate = new Date();

    const postBody = {createdAt:newDate, content: data.content, createdBy:_id}
    const response = await fetch("/api/post", {method: 'POST', body: JSON.stringify(postBody), headers: { 'Content-Type' : 'application/json'}});
    const post = await response.json();

    console.log(post);
    reset();

    setloading(false);
  }

  return (
    <div className='postbox-container'>
        <div className='postbox-wrapper'>
            <form onSubmit={handleSubmit(submitForm)}>
                <p className='postbox-header'>Write a new Post</p>
                <div className='postbox-post'>
                    <div className='postbox-circle'>{firstName.split('')[0]}</div>
                    <input className='postbox-input' {...register('content')}/>  
                </div>
                <hr className='postbox-line'></hr>
                <div className='postbox-button'> 
                    <button
                        disabled={loading} 
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