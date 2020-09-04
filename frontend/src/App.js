import React from 'react'; 
import { Route, Switch } from "react-router-dom";
import Pacientes from './containers/Pacientes';
import Login from './containers/Login';
import Registro from './containers/Registro';




function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/pacientes' component={Pacientes} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/registro' component={Registro} />
            </Switch>
        </div>
    );
}

export default App;
