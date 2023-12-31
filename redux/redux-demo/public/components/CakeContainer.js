import { buyCake, cancelCake } from "../redux";
import { connect, useDispatch, useSelector } from "react-redux";
const   CakeContainer  = (props) => {
    const dispatch=useDispatch()
    const numofCakes=useSelector(state => state.cake.numOfCakes)
    return ( 
        <div>
            <h2>Number of Cake - {numofCakes}</h2>
            <button onClick={()=> dispatch(cancelCake())}>Buy Cake</button>
            <button onClick={()=> dispatch(buyCake())} >cancel cake</button>
        </div>
     );
}

const mapStateToProps = state =>{
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake: () => dispatch(buyCake()),
        cancelCake: () => dispatch(cancelCake())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
    // mapStateToProps,
    // mapDispatchToProps,
    // mapDispatchToProps2
    // CakeContainer