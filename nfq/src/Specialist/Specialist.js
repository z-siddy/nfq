import React from 'react';
import NavbarHandler from '../NavbarHandler';
import './Specialist.css';

class Specialist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
        <div>
          <div>
            <div id="content">
              <NavbarHandler pageName="Specialistams"/>
            </div>
          </div>
        </div>
    );
  }
}

export default Specialist;
