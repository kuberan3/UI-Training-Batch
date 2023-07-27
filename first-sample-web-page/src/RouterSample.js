import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './header';
import HomeSample from './HomeSample';
import ItemSample from './ItemSample';
import MainSample from './MainSample';
import { styled } from 'styled-components';
import SampleStore from "./SampleStore";
import AxiosSample from "./AxiosSample";
import Axioscrud from "./AxiosCrud";
import SampleRating from "./SampleRating";
import BuyPage from './BuyPage';
import { useEffect,useState } from 'react';
import axios from 'axios';


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

const RouterSample = () => {
    // const Datatopass= []
    const [Datatopass,setDatatopass]=useState([])
    const [productCount,setproductCount]=useState(0)
    const [deleteCount,setdeleteCount]=useState(0)


    const handleClick = (product) => {
        // Datatopass.push(product)
        
        setDatatopass([...Datatopass, product]);
          setproductCount(Datatopass.length+1)
      };
     
    //   const handleDelete = (e)=>{
    //    console.log(index)
    //     let newData=Datatopass
    //     setDatatopass(newData.splice(index, 1))
    //      var value=e.target.closest('tr');
    //      value.remove();
    //      setdeleteCount(deleteCount+1)
    //   }
      const handleDelete = (index) => {
        const filterData = Datatopass.filter((item,i) => i !== index);
        setDatatopass(filterData);
        setproductCount(Datatopass.length-1)
      };
     
    return ( 
        <div>
            <Router>
                <Header data={ productCount } />
    
                    <Route path="/home">
                        <SampleStore  onClickHandler={handleClick} />
                    </Route>
                    <Route path="/buy">
                        <BuyPage data={Datatopass} deleteFunction={handleDelete}/>
                    </Route>
        </Router>
       
        </div>
     );
}
 
export default RouterSample;