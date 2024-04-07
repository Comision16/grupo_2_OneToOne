const CategoryCard = ({ categorias }) => {
  let categoriaURL = '';
  
  // Determinar la URL correspondiente según la categoría
  switch (categorias) {
    case 'PANTALONES':
      categoriaURL = 'http://localhost:3000/productos/listar?categoria=2';
      break;
    case 'ABRIGOS':
      categoriaURL = 'http://localhost:3000/productos/listar?categoria=3';
      break;
    case 'CAMISAS':
      categoriaURL = 'http://localhost:3000/productos/listar?categoria=5';
      break;
      case 'REMERAS':
        categoriaURL = 'http://localhost:3000/productos/listar?categoria=1';
        break;
        case 'ACCESORIOS':
          categoriaURL = 'http://localhost:3000/productos/listar?categoria=4';
          break;
    default:
      break;
  }

  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        {/* Utilizar un enlace <a> con el atributo href */}
        <a href={categoriaURL} className="card-body">
          {categorias}
        </a>
      </div>
    </div>
  );
};

export default CategoryCard;