import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';





const Header = () => {
    

    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">One to One</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/productos">Productos</a></li>
    <li><a className="dropdown-item" href="/clientes">Clientes</a></li>
    <li><a className="dropdown-item" href="/encargos">Encargos</a></li>
  </ul>
</li>


                    </ul>
                    <form id="searchForm" className="d-flex" role="search">
                        <input id="searchInput" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
export default Header
