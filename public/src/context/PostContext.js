import { createContext, useContext } from 'react'
let post = localStorage.getItem('post');


//Post become a Javascript object 
if (post) post = JSON.parse(post);

const PostInitialState = {
    createdAt: post?.createdAt ||  "",
    createdBy: post?.createdBy || '',
    content: post?.content || '',
};

const UserContext = createContext(PostInitialState);

const PostProvider = ({children}) => {  

    const addPostToStorge = (user) => {
        localStorage.setItem('user', JSON.stringify(user))
    }
    addPostToStorge(post);
}

const usePostAppContext = () => useContext(UserContext);

export { PostProvider, PostInitialState, usePostAppContext };
