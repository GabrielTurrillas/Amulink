import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPacientes } from '../../redux/actions/pacientes';
import { load_user } from '../../redux/actions/auth';
import { Link } from 'react-router-dom';

const PacienteLista = () => {
    const dispatch = useDispatch();
    const pacientes = useSelector(state => state.pacientesReducer.pacientes)

    useEffect(() => {
        load_user();
        dispatch(fetchPacientes());
    }, [dispatch])
    
    if (!pacientes || !pacientes.length) {
        return (
            <p>NO HAY PACIENTES</p>
        ) 
    }
    return (
        <div className='container'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido Paterno</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {pacientes.map(({ id, nombre, apellidoPaterno, email }) =>
                        <tr key={id} className='clickable-row'>
                            <th scope="row">{id}</th>
                            <td><Link to={"Pacientes/"+id}>{nombre}</Link></td>
                            <td><Link to={"Pacientes/"+id}>{apellidoPaterno}</Link></td>
                            <td><Link to={"Pacientes/"+id}>{email}</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    ) 
}

export default PacienteLista;

/* <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>                  */

