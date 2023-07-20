import React, { useState } from 'react';

const Sample = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [...prevData, formData]);
    setFormData({ name: '', age: '' }); // Clear the form after submission
    console.log(data)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>

      <h3>Data in Array:</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{`${item.name} - ${item.age}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sample;
