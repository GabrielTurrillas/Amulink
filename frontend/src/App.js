import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PacienteList from './components/PacienteList';



class App extends Component {
    render() {
        return(
            <div className="App">
                <PacienteList />
            </div>
        );
    }
}


export default App;
