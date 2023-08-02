import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import IceContainer from './components/IceContainer';
import FormContainer from './components/formContainer';
import FormDataDisplayer from './components/FormDataDisplayer';
import store from './redux/Store';
import UserDataDisplayer from './components/UserDtataDisplayer';

function App() {
  return (
      <div>
        <Provider store={store}>
           <div className="App">
            {/* <IceContainer/> */}
           {/* <CakeContainer /> */}
           
            {/* <FormContainer/> */}
           {/* <FormDataDisplayer/> */}
           <UserDataDisplayer/>
         </div>
        </Provider>
      </div>
    
  );
}

export default App;
