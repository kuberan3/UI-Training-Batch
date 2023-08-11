import React, { useState } from "react";
import { connect } from "react-redux";
import { storeFormValues } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";

const Button=styled.button`
background-color: rgb(40,115,240);
height: 30px;
width:100px;
border:none;
border-radius: 10px;
&:hover {
    background-color: rgb(137, 185, 234)
  }
`
const InputDiv=styled.div
`
width:100vw;
height:20vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Form=styled.form
`
display: flex;
height:100%;
align-items:center;
flex-direction: column;
width: 400px;
background-color: aliceblue;
border-radius:20px;
justify-content:center;
`
const Input=styled.input
`
border-radius: 10px;
border:0.1px solid black;
height:30px;
margin-top:10px;
margin-bottom:10px;
width:200px;
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
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <Button type="submit">Submit</Button>
      </Form>
      </InputDiv>
    </div>
  );
};

export default connect(null, { storeFormValues })(MyForm);
