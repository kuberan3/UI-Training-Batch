// import React, { useState } from 'react';

// const Sample = () => {
//   const [data, setData] = useState([]);
//   const [formData, setFormData] = useState({ name: '', age: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setData((prevData) => [...prevData, formData]);
//     setFormData({ name: '', age: '' }); // Clear the form after submission
//     console.log(data)
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

//         <label htmlFor="age">Age:</label>
//         <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />

//         <button type="submit">Submit</button>
//       </form>

//       <h3>Data in Array:</h3>
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>{`${item.name} - ${item.age}`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sample;

import React, { useState } from 'react';

const Sample = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25},
    { id: 1, name: 'John', age: 30}, // Duplicate entry
    { id: 4, name: 'Mike', age: 28},
  ]);

  // Function to get unique items with their occurrences
  const getUniqueData = (arr) => {
    const countMap = new Map();
    arr.forEach((item) => {
      const id = item.id;
      countMap.set(id, (countMap.get(id) || 0) + 1);
    });

    const uniqueData = arr.filter((item, index) => {
      return index === arr.findIndex((obj) => obj.id === item.id);
    });

    return uniqueData.map((item) => ({
      ...item,
      occurrences: countMap.get(item.id),
    }));
  };

  const uniqueData = getUniqueData(data);

  return (
    <div>
      <h1>Table Component</h1>
      {/* Conditionally render the table */}
      {uniqueData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Location</th>
              <th>Occurrences</th>
            </tr>
          </thead>
          <tbody>
            {uniqueData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.location}</td>
                <td>{item.occurrences}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No unique data available.</p>
      )}
    </div>
  );
};

export default Sample;
