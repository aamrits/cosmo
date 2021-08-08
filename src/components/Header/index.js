import React from 'react';
import './styles.scss';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from '../../pages/Home';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">COSMO</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/neo" className="nav-link">Near Earth Objects </Link>
            </li>
            <li className="nav-item">
              <Link to="/space-weather" className="nav-link">Space Weather </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
