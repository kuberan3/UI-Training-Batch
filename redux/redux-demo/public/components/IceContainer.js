import { buyIce, cancelIce } from "../redux";
import {  useDispatch, useSelector } from "react-redux";

const   IceContainer  = (props) => {
    const dispatch=useDispatch()
    const numofIce=useSelector(state => state.ice.numOfIce)
    return ( 
        <div>
            <h2>Number of Ice - {numofIce}</h2>
            <button onClick={()=> dispatch(cancelIce())}>Buy ICE</button>
            <button onClick={()=> dispatch(buyIce())} >cancel ICE</button>
        </div>
     );
}

export default IceContainer