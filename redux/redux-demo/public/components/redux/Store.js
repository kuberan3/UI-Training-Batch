import { createStore,applyMiddleware} from 'redux'
import CakeReducer from './cakes/CakeReducer'
import iceReducer from './ice/iceReducer'
import { combineReducers } from 'redux'
import FormReducer from './forms/FormReducer'
import dataReducer from './userDataFetch/userDataReducer'
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
const rootReducer=combineReducers({
    cake:CakeReducer,
    ice:iceReducer,
    form:FormReducer,
    user:dataReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
