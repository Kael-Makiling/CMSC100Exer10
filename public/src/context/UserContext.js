import React, { useEffect, createContext, useContext, useReducer } from 'react'
import UserReducer from './UserReducer';
import { useNavigate } from 'react-router-dom';

let user = localStorage.getItem('user');

//User become a Javascript object 
if (user) user = JSON.parse(user); 

const UserInitialState = {
    firstName: user?.firstName ||  "",
    lastName: user?.lastName || '',
    email: user?.email || '',
    friends: user?.friends || [],
    friendRequest: user?.friendRequest || [],
    sentRequest: user?.sentRequest || [],
    name: user?.name || '',
    isLoggedIn: user?.isLoggedIn || false,
    _id: user?._id || ''
};

const UserContext = createContext(UserInitialState);
const UserProvider = ({children}) => {  
    
    const [state, dispatch] = useReducer(UserReducer, UserInitialState)
    const navigate = useNavigate();
    useEffect (() => {
        if (state.isLoggedIn);
    }, [state.isLoggedIn])

    const logOut = () => {
        dispatch({ type : "LOG_OUT"})
        removeUserToStorage();
        navigate("./");
    }
    const addUserToStorge = (user) => {
        localStorage.setItem('user', JSON.stringify(user))
    }

    const removeUserToStorage = () => {
        localStorage.removeItem('user');
    }
    
    const signIn = (user) => {
        // console.log(user);
        const { email, firstName, friendRequest, sentRequest, friends, lastName, name, _id } = user;
        dispatch({type: "SIGN_IN", payload: { 
            email, 
            firstName, 
            friendRequest,
            sentRequest, 
            friends, 
            lastName, 
            _id,
            name,
        }})
        addUserToStorge(user);
        navigate("/home");
    };
    // console.log(state)
    return (
    <UserContext.Provider 
        value={{
            ...state,
            signIn,
            logOut,
        }}
    >
        {children}
    </UserContext.Provider>
  )
}

const useUserAppContext = () => useContext(UserContext);

export { UserProvider, UserInitialState, useUserAppContext };