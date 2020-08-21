import React, { Component } from 'react';
import axios from 'axios';

class PacienteList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            paciente: []
        }
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/paciente`)
            .then(response => {
                console.log(response)
                this.setState({paciente: response.data})

            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { paciente } = this.state
        return (
            <div>
                Lista de pacientes
                {
                    paciente.length ?
                    paciente.map(paciente => <div key={paciente.id}>{paciente.nombre}</div>) :
                    null
                }
            </div>
        )
    }
}

export default PacienteList