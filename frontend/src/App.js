import React from 'react'; 
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Pacientes from './containers/Pacientes'



function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/pacientes' component={Pacientes}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
