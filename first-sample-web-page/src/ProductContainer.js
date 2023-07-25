import  styled  from "styled-components";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const ProductPic = styled.img`
  width:150px;
  height:150px;
`
const StyledButton = styled.button`
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: rgb(0,180,247);
    &:hover {
        background-color: rgb(66,132,243);
  }
    `
const ProductDiv = styled.div`
    width: 340px;
    padding-top: 20px;
    height: 350px;
    box-shadow: 5px 5px 10px rgb(192, 203, 207);
    /* border: 1px solid black; */
    margin: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
        transform: scale(1.1);
  }
`
const LandingPage = styled.div`
width: 100vw;

top: 0;
bottom: 0;
overflow: auto;
height: 100vh;
justify-content: center;
display: flex;
flex-wrap: wrap;
`

const ProductContainer = () => {

    const [dataBase,setdataBase]= useState([])
    const [toAdd,settoAdd]=useState({})

    const fetchingData = async () => {
       
        try{
            const responseData = await  axios.get('https://fakestoreapi.com/products/')
        setdataBase(responseData.data)
        }
        catch (error){
            console.log(error)
        }
        
     }
     useEffect(() => {
       
        return () => {
            fetchingData()
        };
      }, []);
    const handleAdd=(index)=>{

     
        // console.log(index)
        settoAdd(dataBase[index])
        axios.post('https://fakestoreapi.com/products/', toAdd)
        .then(response => {
          console.log('Response:', response.data);
        })
        .catch(error => {
          // Handle errors here
          console.error('Error sending data:', error);
        });

        
    }

    return ( 
        <LandingPage>
            
            {
                dataBase.map((product,index)=>{
                    return(
                        <ProductDiv>
                            <ProductPic src={product.image}></ProductPic>
                            <h5>{product.title.slice(0,32)}</h5>
                            <h4>Price : {product.price}</h4>
                            <StyledButton onClick={()=>{handleAdd(index)}}>Buy</StyledButton>
                        </ProductDiv>
                    ) 
                })
            }
            
        </LandingPage>
     );
}
 
export default ProductContainer;