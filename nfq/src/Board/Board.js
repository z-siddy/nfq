import React from 'react';
import NavbarHandler  from '../NavbarHandler';
import './Board.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { specialists: props.specialists };
  }

  render() {
    return (
      <div>
        <div id="content">
          <NavbarHandler pageName="Švieslentė"/>
          {this.props.items}
        </div>
      </div>
    );
  }
}

export default Board;
