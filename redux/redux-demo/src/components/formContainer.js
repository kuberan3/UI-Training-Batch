import React, { useState } from "react";
import { connect } from "react-redux";
import { storeFormValues } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";


const InputDiv=styled.div
`
width:100vw;
height:10vh;
display:flex;
align-item:center;
justify-content:center;
`

const MyForm = ({ storeFormValues }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.form?.formData);
 
  const [formData, setformData] = useState({
    name: "",
    email: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    dispatch(storeFormValues(userData.concat(formData)));
  };

  return (
    <div>
      <InputDiv>
     
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>
      </InputDiv>
    </div>
  );
};

export default connect(null, { storeFormValues })(MyForm);
