import { createStore} from 'redux'
import CakeReducer from './cakes/CakeReducer'
import iceReducer from './ice/iceReducer'
import { combineReducers } from 'redux'
import FormReducer from './forms/FormReducer'
import dataReducer from './userDataFetch/userDataReducer'

const rootReducer=combineReducers({
    cake:CakeReducer,
    ice:iceReducer,
    form:FormReducer,
    user:dataReducer
})

const store = createStore(rootReducer)


export default store