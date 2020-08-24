import React from 'react'; 
//import { BrouserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from './components/Nav';
import PacienteLista from './components/PacienteLista';
import AgregarPaciente from './components/AgregarPaciente'
import { PacienteProvider } from './components/PacienteContext';


function App() {
    return (
        <PacienteProvider>
            <div className="App">
                <Nav />
                <AgregarPaciente />
                <PacienteLista />
            </div>
        </PacienteProvider>
    );
}

export default App;
