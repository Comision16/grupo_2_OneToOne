import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../services';


const Clientes = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const users = await getAllUsers();
        setUsuarios(users);
      } catch (error) {
        console.error('Error fetching usuarios:', error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <div className="container">
      <h1>Clientes</h1>
      <div className="card border-left-warning shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Clientes registrados</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">Total : {usuarios.length}</div>
            </div>
            <div className="col-auto">
              <i className="fas fa-user fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Informacion</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td>{usuario.name}</td>
                  <td>{usuario.surname}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.role.name}</td>
                  <td> <a className="btn btn-danger" target="_blank" rel="nofollow" href={usuario.detail}>info</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Clientes;