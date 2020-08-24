import React, {useContext} from 'react';
import Paciente from './Paciente';
import { PacienteContext } from './PacienteContext';

const Nav = () => {
    const [pacientes, setPacientes] = useContext(PacienteContext);

    return (
        <nav>
            <h3>numero de pacientes: {pacientes.length}</h3>
        </nav>
    );
};

export default Nav;