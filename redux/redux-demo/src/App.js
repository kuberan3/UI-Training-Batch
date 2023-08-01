import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/Store';
import IceContainer from './components/IceContainer';
import FormContainer from './components/formContainer';
import FormDataDisplayer from './components/FormDataDisplayer';
function App() {
  return (
        <Provider store={store}>
           <div className="App">
            {/* <IceContainer/> */}
           {/* <CakeContainer /> */}
           <FormContainer/>
           <FormDataDisplayer/>
         </div>
        </Provider>
        
    
  );
}

export default App;
