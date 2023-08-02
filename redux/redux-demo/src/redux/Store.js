import { createStore,applyMiddleware} from 'redux'
import CakeReducer from './cakes/CakeReducer'
import iceReducer from './ice/iceReducer'
import { combineReducers } from 'redux'
import FormReducer from './forms/FormReducer'
import dataReducer from './userDataFetch/userDataReducer'
import thunkMiddleware from 'redux-thunk';
const rootReducer=combineReducers({
    cake:CakeReducer,
    ice:iceReducer,
    form:FormReducer,
    user:dataReducer
})

// const store = createStore(rootReducer)


// export default store


// import rootReducer from './userDataFetch/userDataReducer';


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
