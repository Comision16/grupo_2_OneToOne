import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../../services';


const UsuariosRegistrados = () => {
  const [totalUsuariosRegistrados, setTotalUsuariosRegistrados] = useState(0);

  useEffect(() => {
    const fetchTotalUsuariosRegistrados = async () => {
      try {
        const users = await getAllUsers();
        // Obtener la longitud del array de usuarios para obtener el total
        const total = users.length;
        setTotalUsuariosRegistrados(total);
      } catch (error) {
        console.error('Error fetching total de usuarios registrados:', error);
      }
    };

    fetchTotalUsuariosRegistrados();
  }, []);

  return (
    <div className="card border-left-warning shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Usuarios registrados</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">{totalUsuariosRegistrados}</div>
          </div>
         
          <div className="col-auto">
            <i className="fas fa-user fa-2x text-gray-300"></i>
          </div>
        
        </div>
        
      </div>
      <a className="btn btn-darck" target="_blank" rel="nofollow" href='http://localhost:3000/apis/users'> Ver </a>
    </div>
  );
}

export default UsuariosRegistrados;