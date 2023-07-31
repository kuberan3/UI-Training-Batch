import { useState } from "react";
import { formSubmit } from "../redux";
import { storeFormValues } from "../redux";
import { useDispatch, useSelector } from "react-redux";

const   FormContainer  = (props) => {
    const [u_name,setu_name]=useState
    const dispatch=useDispatch()
    const givenName=useSelector(state => state.form.name)
    
  const handleInputChange = (e) => {
    setu_name(e.target.value)
  };
  const handleSubmit =()=>{
    e.preventDefault();
    storeFormValues(formData);
  }
    return ( 
        <div>
            <h2>Number of Cake - {givenName}</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </form>
        </div>
     );
}

export default FormContainer