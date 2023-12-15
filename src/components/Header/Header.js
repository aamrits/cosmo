import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { ToggleButton } from '../../components';
import Logo from '../../assets/images/shared/logo.svg';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light custom-navbar">
      <div className="container-fluid g-0">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Logo" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/asteroid-watch" className="nav-link">Asteroid Watch </Link>
            </li>
            <li className="nav-item">
              <Link to="/space-weather" className="nav-link">Space Weather </Link>
            </li>
            <li className="nav-item">
              <ToggleButton />           
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
