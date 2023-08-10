import { useState, useEffect } from "react"
import "./App.css";
import { styled } from "styled-components";
import { PiShoppingCart } from "react-icons/pi";
const EmptyDiv = styled.div`
width: 100vw;
height:70vh;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const BuyPage = (props) => {
    console.log(props)
      const sum = (arr) => {
        let total = 0;
        arr?.forEach((num) => {
          total += num.price;
        });
        return total;
      };
    

      let TotalPrice=sum(props.data)  

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

  const uniqueData = getUniqueData(props.data);


    return ( 
        <div > { props.data.length > 0 ? (
                <table>
        <thead>
            <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {uniqueData?.map((product, index) => (
            <tr key={index}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.occurrences}</td>
                <td><button onClick={()=>props.deleteFunction(product.id)}>Delete</button></td>

            </tr>
            ))}
        </tbody>
        <tr >
                <td>Total</td>
                <td> </td>
                <td> {TotalPrice} </td>
                <td></td>
         </tr>
    </table>
        ) : ( <EmptyDiv>
             <h1> <PiShoppingCart/> No cart </h1>
            
        </EmptyDiv>
         )
    }
        </div>
          
     );
}
 
export default BuyPage;