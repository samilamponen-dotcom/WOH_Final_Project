import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
        <div className="container">
            <Link to="/" className="navbar-brand">PokeApp</Link>

            <button
            className = "navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/details" className="nav-link">Details</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/compare" className="nav-link">Compare</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default NavBar