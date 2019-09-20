import React from 'react';
import $ from 'jquery';

function handleClick(){
  $('#sidebar, #content').toggleClass('active');
  $('.collapse.in').toggleClass('in');
  $('a[aria-expanded=true]').attr('aria-expanded', 'false');
}
const NavbarHandler = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn navToggleBtn"
            onClick={handleClick}
          >
            <i className="material-icons">menu</i>
          </button>
          <h1 style={{color: "#FF6B00"}}>{props.pageName}</h1>
        </div>
      </nav>
    </div>);
};

export default NavbarHandler;
