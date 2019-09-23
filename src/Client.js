import React from 'react';

const Client = (props) => {
  return (
    <li className="list-group-item" style={props.bg}>
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          Klientas: <b>{ props.firstname + " " + props.lastname }</b>
        </div>
        <div className="col-sm-12 col-lg-6">
          Eilės nr.: <b>{ props.ticket }</b>
        </div>
      </div>
    </li>);
};

export default Client;
