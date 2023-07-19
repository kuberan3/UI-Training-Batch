// import { useState } from "react";
const ProductsBox = (props) => {
   
    
    
  console.log("receved",props.product);
  return (
    [...props.product].map((item)=>{
        // console.log("hi")
        return(
            <table>
                <tr><bold>{item.name}</bold></tr>
            </table>
    )
    })
    // <div>
       
    //   <h1>{props?.product[1]?.name}</h1>
    // </div>
  );
};

export default ProductsBox;
