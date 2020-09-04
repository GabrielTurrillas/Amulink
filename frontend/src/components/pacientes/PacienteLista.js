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
            {errors ? errors.map(err => <p>{err}</p>): <></>}
        </Fragment>
    ) 
}

export default PacienteLista;


/*             {pacientes.map((paciente) => {
                return (
                    <div key={paciente.id}>
                        <p>
                            {paciente.nombre} {paciente.apellidoPaterno}
                        </p>
                    </div>
                )
            })} */

/* const mapStateToProps = state => ({
    pacientes: state.pacientes.pacientes
})

PacienteLista.propTypes = {
    pacientes: propTypes.array.isRequired
}
*/
