import React from 'react';
import NavbarHandler from '../NavbarHandler';
import './Admin.css';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
        <div>
          <div>
            <div id="content">
              <NavbarHandler pageName="Administracijai"/>
            </div>
          </div>
        </div>
    );
  }
}

export default Admin;
