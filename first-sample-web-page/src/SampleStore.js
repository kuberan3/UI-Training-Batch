import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./header"

function SampleStore() {

        const [dataBase,setdataBase]=useEffect()
    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            console.log(response)
                // setdataBase(response)
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
    
    //   useEffect(() => {
    //     console.log({ data });
    //   }, [data]);
      
    //   const [num,setnum]=useState('');
  
  
  return (
    <div className="main">  
    <Header />
    </div>
  );
}

export default SampleStore;
