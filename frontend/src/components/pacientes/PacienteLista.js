import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPacientes } from '../../redux/actions';


const PacienteLista = () => {
    const dispatch = useDispatch();

    const { loading, pacientes, errors } = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchPacientes())
    }, [])


    return (
        <Fragment>
            { loading ? 'Cargando pacientes...' : pacientes.map((paciente) => {
                return (
                    <div key={paciente.id}>
                        <p>
                            {paciente.nombre} {paciente.apellidoPaterno}
                        </p>
                    </div>
                )
            })}
            {errors ? <p>{errors}</p> : <></>}
        </Fragment>
    ) 
}

export default PacienteLista;

