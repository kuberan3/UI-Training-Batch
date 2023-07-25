import  styled  from "styled-components";
import React, { useState,useEffect } from "react";
import axios from "axios";

const ProductDiv = styled.div`
    width: 300px;
    padding-top: 20px;
    height: 500px;
    box-shadow: 5px 5px 10px rgb(192, 203, 207);
    /* border: 1px solid black; */
    margin: 15px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
        transform: scale(1.1);
  }
`
const ProductPic = styled.img`
  width:150px;
  height:150px;
`
const AddDiv = styled.div`
    width: 10vw;
`

const LandingPage = styled.div`
width: 90vw;
/* margin-top: 100px; */
top: 0;
bottom: 0;
overflow: auto;
height: 100vh;
justify-content: center;
display: flex;
flex-wrap: wrap;
`

const StyledButton = styled.button`
    width: 150px;
    margin: 5px;
    height: 40px;
    border: none;
    font-weight: 600;
    color: white;
    border-radius: 10px;
    background-color: rgb(0,180,247);
    &:hover {
        background-color: rgb(66,132,243);
  }
`

const MainDiv = styled.div`
width:100vw;
height: 100vh;
display: flex;
`

const Axioscrud = () => {
    

    const [data,setdata]=useState([])
    const [productName,setproductName]=useState([])
    const [toAdd,settoAdd]=useState({
        brand: '',
        price: '',
        rating: '',
        thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',

    })
    const fetchingData = async () => {
        try{
            const responseData = await  axios.get('http://localhost:8000/data')
            setdata(responseData.data)
            console.log("data fetched",responseData.data)
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
      const handleDelete=(index)=>{
            axios.delete(`http://localhost:8000/data/${index}`)
             fetchingData();
          }
          const handleChange=(e)=>{
            setproductName(e.target.value)
          }

          const handleUpdate=(data)=>{
                console.log(productName)
                axios.put(`http://localhost:8000/data/${data.id}`, {brand: `${productName}`,price:`${data.price}`,rating: `${data.rating}`,thumbnail: `${data.thumbnail}`})
                fetchingData();
          }
          const handleadd=()=>{
            console.log(toAdd.brand)
            let Name=toAdd.brand
            let BrandExists = data.find((exist) => `${exist.brand}` === Name);
            if(BrandExists)
            {
               alert("Brand is already Exists")
            }
            else{
                axios.post('http://localhost:8000/data', toAdd)
             
            .then(response => {
              console.log('Response:', response.data);
            })
            .catch(error => {
              console.error('Error sending data:', error);
            });
            fetchingData();
            }
          }
        const handleAddChange=(e)=>{
            settoAdd(() => ({
                ...toAdd,
                [e.target.name]: e.target.value,
              }));
        }
    return (
            <MainDiv>
                <AddDiv>
                    <label>Brand   :</label>
                    <input id="inputBox" name="brand" onChange={handleAddChange}></input>
                    <br />
                    <label>Rating :</label>
                    <input id="inputBox" name="rating" onChange={handleAddChange}></input>
                    <br />
                    <label>Price   :</label>
                    <input  name="price" onChange={handleAddChange}></input>
                    <br />
                <StyledButton onClick={handleadd}>Add</StyledButton>
                </AddDiv>
            <LandingPage>
            {
                
                 data?.map((product,index)=>{
                    return(
                        <ProductDiv>
                        <ProductPic src={product.thumbnail}></ProductPic>
                        <h3>{product.brand}</h3>
                        <input name="brand"  onChange={handleChange}></input>
                        <button onClick={()=>handleUpdate(product)}>Change</button>
                        <h3>Price: {product.price}</h3>
                        <h3>Rating: {product.rating}</h3>
                        <StyledButton onClick={()=>handleDelete(product.id)}>Delete Product</StyledButton>
                       
                        </ProductDiv>
                    )
                 })
            }
            </LandingPage>
            </MainDiv>
           
     );
}
 
export default Axioscrud;