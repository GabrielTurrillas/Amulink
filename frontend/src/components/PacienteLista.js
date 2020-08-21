import React, { Component } from 'react';
import PacienteItem from './PacienteItem'
import PropTypes from 'prop-types';
import PacienteList from './PacienteList';


class PacienteLista extends Component {
    render() {
        return this.props.pacientes.map((paciente) => (
        <PacienteItem key={paciente.id} paciente={paciente} />
        ));
    }
}


PacienteList.propTypes = {
    paciente: PropTypes.array.isRequired
}


export default PacienteLista;