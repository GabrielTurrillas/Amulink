import React from 'react'; 
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Pacientes from './containers/Pacientes'
import Login from './containers/Login'



function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/pacientes' component={Pacientes}/>
                    <Route exact path='/login' component={Login} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
