import React from 'react';
import NavbarHandler  from '../NavbarHandler';
import './Board.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <div id="content">
          <NavbarHandler pageName="Švieslentė"/>
        </div>
      </div>
    );
  }
}

export default Board;
