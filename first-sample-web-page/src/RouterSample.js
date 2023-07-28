import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './header';
import SampleStore from "./SampleStore";
import AxiosSample from "./AxiosSample";
import Axioscrud from "./AxiosCrud";
import SampleRating from "./SampleRating";
import BuyPage from './BuyPage';
import { useEffect,useState } from 'react';
import Footer from './Footer'
const RouterSample = () => {

    const [Datatopass,setDatatopass]=useState([])
    const [productCount,setproductCount]=useState()

    const handleClick = (product) => {
        
        setDatatopass([...Datatopass, product]);
          setproductCount(Datatopass.length+1)
      };
     
      const handleDelete = (productId) => {

        // const filterData = Datatopass?.filter((item,i) => i !== index);
      // let i=0
      //   if(  Datatopass?.find((Product,i)=>( Product.id===index; i= )))
      //   {
      //     console.log(i)
      //   }
       // setDatatopass(filterData);
        // setproductCount(Datatopass.length-1)
        
      let lable=0;
        Datatopass?.map((data,index)=>{
          if(data.id===productId && lable===0)
          {
              lable=1;
              const filterData = Datatopass?.filter((item,i) => i !== index);
              setDatatopass(filterData);
              setproductCount(Datatopass.length-1)
          }
        })

       
      

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
                <Footer/>
        </Router>
       
        </div>
     );
}
 
export default RouterSample;