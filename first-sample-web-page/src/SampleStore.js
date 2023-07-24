import React from "react";
import "./App.css";
import Header from "./header"
import ProductContainer from "./ProductContainer";
import Footer from "./Footer";




function SampleStore() {

  
  return (
    <div className="main">  
    <Header />
    <ProductContainer />
    <Footer />
    </div>
  );
}

export default SampleStore;
