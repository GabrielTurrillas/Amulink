import React, { useState, useEffect ,createContext } from 'react';

export const PacienteContext = createContext();

export const PacienteProvider = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/paciente/")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPacientes(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
            
    }, [])

    if (error) {
        return <div>Error: {error.mesaage}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } 

    return(
        <PacienteContext.Provider value={[pacientes, setPacientes]}>
            {props.children}
        </PacienteContext.Provider>
    );
}