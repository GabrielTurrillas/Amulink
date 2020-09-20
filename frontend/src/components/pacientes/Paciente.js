import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Paciente = ({id, nombre, apellidoPaterno, email}) => {    
    return(
        <Fragment>

           {/*  nombre: <Link to={'/pacientes/'+id} >{nombre}</Link> apellido: {apellidoPaterno} email: {email} */}
        </Fragment>
    );
}

export default Paciente

{/* <table class="table table-hover">
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
</table>                  */}

