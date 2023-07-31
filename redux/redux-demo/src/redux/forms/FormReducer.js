import { FORM_SUBMIT } from "./FormTypes"
const initialState ={
    name: 'kuberan'
}

const FormReducer = (state=initialState,action)=>{
    switch(action.type){
        case FORM_SUBMIT: return {
            ...state,
            name:e.target.value
        }
        default: return state
    }
}

export default FormReducer