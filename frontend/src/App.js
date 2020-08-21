import React, { Component } from 'react';
import PacienteLista from './components/PacienteLista';

import './App.css';
import axios from 'axios';


class App extends Component {
    state = {
        pacientes: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/paciente/')
            .then(response => this.setState({ pacientes: response.data }))
    }

    render() {
        return(
            <div className="App">
                <PacienteLista pacientes={this.state.pacientes}/>
            </div>
        );
    }
}


export default App;
