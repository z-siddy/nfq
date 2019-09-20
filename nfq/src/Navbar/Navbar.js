import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/logo.png';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
        <nav id="sidebar">
          <div className="sidebar-header">
            <img alt="NFQ Logo" src={logo} className="navLogo" />
          </div>
          <ul className="list-unstyled components">
            <li>
              <Link to="/">Švieslentė</Link>
            </li>
            <li>
              <Link to="/specialist">Specialistams</Link>
            </li>
            <li>
              <Link to="/admin">Administracijai</Link>
            </li>
          </ul>
        </nav>
    );
  }
}

export default Navbar;
