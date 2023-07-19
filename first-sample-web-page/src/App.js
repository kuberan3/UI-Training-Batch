import React, { useEffect, useState } from "react";
import RegistrationForm from "./RegistrationForm";
import PersonCard   from './PersonCard';
import ImageUploadComponent from "./ImageUploadComponent";
import StarRating from "./StarRating";
import "./App.css";



function App() {
  // const [data, setdata] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       // console.log(response.data);
  //       setdata(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   console.log({ data });
  // }, [data]);
  
  // const [num,setnum]=useState('');
  const [displayData, setDisplayData] = useState(null);

  const handleFormSubmit = (formData) => {
    setDisplayData(formData);
    // setnum(20)
  };
  const ratings = 3.6;
  return (
    <div className="main">
    <RegistrationForm onSubmit={handleFormSubmit} />
    <PersonCard data={displayData} />
    </div>
  );
}

export default App;
