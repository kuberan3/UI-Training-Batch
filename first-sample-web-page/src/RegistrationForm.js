import React, { useState } from 'react';
import styled from 'styled-components'
const RegistrationForm = ({ onSubmit }) => {
    const InputComponent = styled.input`
    border: 1px solid black;
    padding: 10px;
    border-radius:20px;
    margin-bottom:10px;`

    

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    photo: null,
    DoB: '',
    rating:0,
  });
  const a=10;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleImageChange=(e)=>{
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
               
          setFormData({
            ...formData,
            photo: reader.result,
          });
        };
        reader.readAsDataURL(file);
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputComponent
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      
      <InputComponent
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
       <InputComponent
        type="tel"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="mobile"
      />
      <InputComponent
        type="date"
        name="DoB"
        value={formData.DoB}
        onChange={handleChange}
        placeholder="Date of Birth"
      />
       <InputComponent
        type="number"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        placeholder="Ratings"
      />
      
      {/* <InputComponent
        type="file"
        name="photo"
        accept="image/*"
        value={formData.photo}
        onChange={handleChange}
        placeholder="pphoto"
      /> */}
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
