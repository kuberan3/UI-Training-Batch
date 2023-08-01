import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/Store';
import IceContainer from './components/IceContainer';
import FormContainer from './components/formContainer';
import FormDataDisplayer from './components/FormDataDisplayer';
import { styled } from 'styled-components';

const Div=styled.div`
width:100vw;
height:100vh`


function App() {
  return (
    <Div>
        <Provider store={store}>
           <div className="App">
            {/* <IceContainer/> */}
           {/* <CakeContainer /> */}
           
            <FormContainer/>
           <FormDataDisplayer/>
         </div>
        </Provider>
        </Div>        
    
  );
}

export default App;
