import TotalProductosVendidos from "../Products/TotalProductosVendidos"
import UltimosProductos from "../Products/UltimosProductos"
import UsuariosRegistrados from "../Products/UsuariosRegistrados"


const Metrics = () => {
    return (
      <div className="row">
  
      <div className="col-md-4 mb-4">
         <UltimosProductos/>
      </div>
  
      <div className="col-md-4 mb-4">
      <TotalProductosVendidos/>
      </div>
  
      <div className="col-md-4 mb-4">
      <UsuariosRegistrados/>
      </div>
  </div>
    )
  }
  
  export default Metrics
  