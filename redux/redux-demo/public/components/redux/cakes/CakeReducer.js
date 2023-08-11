// import { BUY_CAKE, CANCEL_CAKE } from "./CakeTypes"
const initialState ={
    numOfCakes: 0
}
const CakeReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'BUY_CAKE': return {
            ...state,
            numOfCakes:state.numOfCakes - 1
        }
        case 'CANCEL_CAKE': return{
            numOfCakes:state.numOfCakes + 1
        }
        default: return state
    }
}

export default CakeReducer