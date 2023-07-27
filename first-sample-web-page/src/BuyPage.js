import { useState, useEffect } from "react"
import axios from "axios"
const BuyPage = (props) => {
    console.log(props)
// const {pro,deleteFunction}=props;
      const sum = (arr) => {
        let total = 0;
        arr.forEach((num) => {
          total += num.price;
        });
        return total;
      };
    

      let TotalPrice=sum(props.data)     
     const [Occurance,setOccurance]=useState(0)
     const [currentProduct,setcurrentProduct]=useState('')
     
    return ( 
        <div > { props.data.length > 0 ? (
                <table>
        <thead>
            <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {props.data?.map((product, index) => (
            <tr key={index}>
                
                
                <td>{product.title}</td>
            
                <td>{product.price}</td>
                <td>{Occurance}</td>
                <td><button onClick={()=>props.deleteFunction(index)}>Delete</button></td>

            </tr>
            ))}
        </tbody>
        <tr >
                <td>Total</td>
                <td> </td>
                <td> {TotalPrice} </td>
         </tr>
    </table>
        ) : ( <h1>No cart data</h1> )
    }
        </div>
          
     );
}
 
export default BuyPage;