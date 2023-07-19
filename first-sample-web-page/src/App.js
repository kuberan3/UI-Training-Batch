import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./header";
// import ProductsBox from "./ProductsBox";
import "./App.css";
import ChatBox from "./ChatBox";
import ProductsBox from "./ProductsBox";

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log(response.data);
        setdata(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // useEffect(() => {
  //   console.log({ data });
  // }, [data]);

  return (
    <div>
      <Header />

      <ProductsBox product={data} />
    </div>
  );
}

export default App;
