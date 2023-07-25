import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './header';
import HomeSample from './HomeSample';
import ItemSample from './ItemSample';
import MainSample from './MainSample';

import SampleStore from "./SampleStore";
import AxiosSample from "./AxiosSample";
import Axioscrud from "./AxiosCrud";
import SampleRating from "./SampleRating";
const RouterSample = () => {
    return ( 
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <SampleStore />
                    </Route>
                    <Route path="/main">
                        <SampleRating />
                    </Route>
                    <Route path="/item">
                        <Axioscrud/>
                    </Route>
                </Switch>
            </div>
        </Router>
     );
}
 
export default RouterSample;