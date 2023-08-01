import React, { useState } from "react";
import { connect } from "react-redux";
import { storeFormValues } from "../redux";
import { useDispatch, useSelector } from "react-redux";

const MyForm = ({ storeFormValues }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.form?.formData);
 
  const [formData, setformData] = useState({
    name: "",
    email: "",
  });
console.log(userData)
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
    </div>
  );
};

export default connect(null, { storeFormValues })(MyForm);
