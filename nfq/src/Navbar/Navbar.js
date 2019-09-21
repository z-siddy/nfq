import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/logo.png';
import $ from 'jquery';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  handleClick(){
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  }

  render() {
    return (
        <nav id="sidebar">
          <div className="sidebar-header">
            <img alt="NFQ Logo" src={logo} className="navLogo" />
          </div>
          <ul className="list-unstyled components">
            <li>
              <Link to="/" onClick={this.handleClick}>Švieslentė</Link>
            </li>
            <li>
              <Link to="/specialist" onClick={this.handleClick}>Specialistams</Link>
            </li>
            <li>
              <Link to="/admin" onClick={this.handleClick}>Administracijai</Link>
            </li>
          </ul>
        </nav>
    );
  }
}

export default Navbar;
