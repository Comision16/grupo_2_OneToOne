

const Sidebar = () => {
  return (
    <ul className="navbar-nav sidebar sidebar-dark accordion col-md-auto" style={{backgroundColor: "black"}} id="accordionSidebar">

    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon">
            <img className="w-100 img-fluid " style={{maxWidth: "80px"}} src="/img/logoHome.png" alt="OtO"/>
        </div>
    </a>

    <hr className="sidebar-divider my-0"/>

    <li className="nav-item active">
        <a className="nav-link" href="/">
            <span>One to One - Dashboard</span>
        </a>
    </li>

    <hr className="sidebar-divider"/>

    <div className="sidebar-heading">Actions</div>

    <li className="nav-item">
        <a className="nav-link collapsed" href="/products">
            <i className="fas fa-fw fa-folder"></i>
            <span>Productos</span>
        </a>
    </li>

    <li className="nav-item">
        <a className="nav-link" href="/clientes">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Clientes</span>
        </a>
    </li>

    <li className="nav-item">
        <a className="nav-link" href="/encargos">
            <i className="fas fa-fw fa-table"></i>
            <span>Encargos</span>
        </a>
    </li>

    <hr className="sidebar-divider d-none d-md-block"/>
</ul>
  )
}

export default Sidebar
