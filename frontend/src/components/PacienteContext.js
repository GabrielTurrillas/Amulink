import React, {useState, createContext} from 'react';

export const PacienteContext = createContext();

export const PacienteProvider = (props) => {
    const [pacientes, setPacientes] = useState([
        {
            id: 342,
            nombre: 'Charles',
            apellidoMaterno:'Manson',
            email:'cmanson@gmail.com'

        },
        {
            id: 344,
            nombre: 'Hunter',
            apellidoMaterno:'Thompson',
            email:'hthomson@gmail.com'
        },
        {
            id: 349,
            nombre: 'Gabriel',
            apellidoMaterno:'Turrillas',
            email:'gturrillas@gmail.com'
        }
    ]);
    return(
        <PacienteContext.Provider value={[pacientes, setPacientes]}>
            {props.children}
        </PacienteContext.Provider>
    );
}