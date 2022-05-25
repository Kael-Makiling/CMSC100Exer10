import {useState} from 'react'
import "./ownpostbox.css";
import Miniprofile from '../miniprofile/Miniprofile';
import {FaTrashAlt, FaEdit, FaBan} from "react-icons/fa";
import Moment from 'moment';
const Ownpostbox = ({_id, date, content, createdBy }) => {
    const [editing,setEditing] = useState(false);
    const [ newContent, setNewContent] = useState("");
    const handleDelete = async()=>{
        console.log("hatdog");
        try {
            await fetch("/api/post/deletePost/"+_id, { 
              method: 'POST', 
              headers: { 'Content-Type' : 'application/json'}})
        } catch (er) {
        console.log(er);
        }
    }

    const handleSubmit = async() => {
        await fetch("/api/post/editPost/"+_id+"/"+newContent, 
            {method: 'POST',
            headers: { 'Content-Type' : 'application/json'}});  
    }

    const formatted_date = Moment(date).format("MMM Do YY");  
    return (
        <div className='timelinebox-container'>
            <div className='timelinebox-wrapper'>
                <div className='owntimelinebox-firstpart'>
                    <div className='timelinebox-firstpart-left'>
                        <div className='timelinebox-miniprofile'>
                            <Miniprofile _id={createdBy}/>
                        </div>
                        <div className='timelinebox-time'>
                            <p className='timelinebox-time-text'> {formatted_date} </p>
                        </div>
                    </div>
                    <div className='timelinebox-firstpart-right'>
                        {!editing ?
                            <div className="timelinebox-firstpart-right-icon">  
                                <FaEdit onClick={()=>{setEditing(true);setNewContent(content)}}/>
                                <FaTrashAlt onClick={handleDelete}/> 
                            </div> :
                            <div>
                                <FaBan onClick={()=>setEditing(false)}/>
                            </div>
                        }
                    </div>
                </div>
                <div className='timelinebox-secondpart'>
                    {!editing ? 
                        <p className='timelinebox-text'>{content} </p> :
                        <div className='timelinebox-editing'>
                            <input 
                                type = "text"
                                onChange={(e) => setNewContent(e.target.value)} 
                                value={newContent} 
                                className='timelinebox-text-input'
                            />
                            <div className='timelinebox-text-button'>
                                <button onClick={()=>{setEditing(false);handleSubmit()}}> 
                                Post 
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Ownpostbox