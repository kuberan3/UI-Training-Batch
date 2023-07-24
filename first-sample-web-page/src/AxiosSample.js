import Styled from "styled-components";
import axios from "axios";
import React, { useState, useEffect } from "react";
const AxiosSample = () => {

  const [Persons, setPersons] = useState([]);
  const [newTitle,setnewTitle]=useState({title: ""});
  const [deletingindex,setdeletingindex]=useState('')
  const fetchingData = async () => {
    try {
      const responseData = await axios.get("http://localhost:8000/persons");
      console.log(responseData.data);
      setPersons(responseData.data);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    return () => {
      fetchingData();
    };
  }, []);

  const handleChange=(e)=>{
      
        setnewTitle(() => ({
            title: e.target.value,
          }));
       
  }
  const handleUpdate=()=>{

    axios.post('http://localhost:8000/persons', newTitle)
    .then(response => {
      
      console.log('Response:', response.data);
    })
    .catch(error => {
      // Handle errors here
      console.error('Error sending data:', error);
    });
    fetchingData();
  }

  const handleDelete=()=>{
    axios.delete(`http://localhost:8000/persons/${deletingindex}`)
    .then(response => {
      console.log('Response:');
    })
    .catch(error => {
      console.error('Error deleting data:', error);
    });
  }
  const handleDeleteChange=(e)=>{
    setdeletingindex(e.target.value)
  }
  return (
    <div>
        <div>
            <input 
             type="text"
             name="title"
             id="title"
             value={Persons.title}
             onChange={handleChange}
            ></input>
            <button onClick={()=>{handleUpdate()}}>Update data</button>
        </div>
        <div>
            <input
            type="text"
            name="deleteIndex"
            onChange={handleDeleteChange}
            ></input>
            <button onClick={()=>{handleDelete()}}>Delete</button>
        </div>
      {
        Persons?.map((Users,index)=>{
            return (
              
                <h4>Id:{Users.id} Title: {Users.title}</h4>
               
            )
        })
      }
    </div>
  );
};

export default AxiosSample;
