import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/Store';
import IceContainer from './components/IceContainer';
import FormContainer from './components/formContainer';
function App() {
  return (
        <Provider store={store}>
           <div className="App">
            <IceContainer/>
           <CakeContainer />
           <FormContainer/>
         </div>
        </Provider>
        
    
  );
}

export default App;
