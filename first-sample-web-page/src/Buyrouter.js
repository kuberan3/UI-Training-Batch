import { useState } from "react";

const Buyrouter = (props) => {
    console.log(props)
const [Buydata,setBuydata]=([])
    const sum = (arr) => {
        let total = 0;
        arr.forEach((num) => {
          total += num.price;
        });
        return total;
      };
      let TotalPrice=sum(Buydata)
    return ( 
        <div>
        <table>
<thead>
    <tr>
    <th>Product Name</th>
    <th>Quantity</th>
    <th>Price</th>
    </tr>
</thead>
<tbody>
    {Buydata?.map((product, index) => (
    <tr key={index}>
        <td>{product.title}</td>
        <td>1</td>
        <td>{product.price}</td>
    </tr>
    ))}
</tbody>
<tr >
        <td>Total</td>
        <td> </td>
        <td> {TotalPrice} </td>
 </tr>
</table>
    
</div>
     );
}
 
export default Buyrouter;