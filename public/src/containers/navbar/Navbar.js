import React, {useState, useEffect} from 'react';
import "./navbar.css";
import { FaSearch, FaBan } from "react-icons/fa";
import { useUserAppContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  let navigate = useNavigate();
  const { name, logOut} = useUserAppContext();
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {
    (async () => {
      try {
        //CANT GET SENT REQUEST DATA
        const response = await fetch("/api/user/getAllUsers/", { 
          method: 'GET', 
          headers: { 'Content-Type' : 'application/json'}})
        const user = await response.json();
        const newData = user.data;
        setData(new Array(...newData))
        // console.log(user)
        // console.log(data);
      } catch (er) {
        console.log(er);
      }
    })()
  },[])

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="navbar-container">
      {console.log(data)}
      {console.log(filteredData)}
      <div className="navbar-wrapper">
        <div className="navbar-left">
            <div className='navbar-item-container'>
                <p className="logo"
                onClick={() => {
                  navigate('/home');
                }}
                >Coffer</p>
            </div>
        </div>
        <div className="navbar-center"> 
            <div className="navbar-center-input">
              <input 
                className="navbar-search" 
                placeholder="search" 
                type="text" 
                id="search"
                value={wordEntered}
                onChange={handleFilter} 
              ></input>
              <button className="navbar-icon">
                  {filteredData.length === 0 && wordEntered.length === 0 ? (
                    <FaSearch />
                  ) : (
                    <FaBan id="clearBtn" onClick={clearInput} />
                  )}
              </button>
            </div>
            <div className='searched-data'>
              {filteredData.length !== 0 && (
              <div className="dataResult">
                {filteredData.map((value, key) => {
                  return (
                    <div className="dataItem" key={value.name + key} onClick={()=>{navigate('/friendsprofilepage',{state:{id:value._id,name:value.name}})}}>
                      <p className="dataItem_values">{value.name} </p>
                    </div>
                  );
                })}
              </div>
              )}
            </div>
        </div>
        <div className="navbar-right">
            <button type="button" className="navbar-button" onClick={logOut}>
                Log Out
            </button>
            <p 
              onClick={() => {
                navigate('/profilepage');
              }}
            >{name}</p>
            <span className="dot"></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar