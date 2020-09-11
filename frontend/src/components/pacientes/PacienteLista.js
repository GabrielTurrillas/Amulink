import React, { Fragment, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { fetchPacientes } from '../../redux/actions/pacientes';
import { checkAuthenticated, load_user } from '../../redux/actions/auth'

const PacienteLista = (pacientes) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        load_user();
        dispatch(fetchPacientes());
    }, [dispatch])
    

    return (
        <div>
            {console.log(pacientes)}
        </div>
    ) 
}

const mapStateToProps = state => ({
    pacientes: state.pacientesReducer.pacientes
}) 

export default connect(mapStateToProps,{})(PacienteLista);


/* { loading ? 'Cargando pacientes...' : pacientes.map((paciente) => {
    return (
        <div key={paciente.id}>
            <p>
                {paciente.nombre} {paciente.apellidoPaterno}
            </p>
        </div>
    )
})}
{errors ? <p>{errors}</p> : <></>} */