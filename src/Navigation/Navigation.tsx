import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container-fluid">
        <Link className="fw-bold fs-5 nav-link" to="/">Bit Fountain</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 my-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/modeltype">Model</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/devicemodel">Add Device</Link>
            </li>
            {
            sessionStorage.getItem('token') ?
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => {sessionStorage.removeItem('token')}}>Logout</Link>
              </li> :
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;