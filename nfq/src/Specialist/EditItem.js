import React from 'react';

const EditItem = (props) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-sm-12 col-lg-4">
          Klientas: <b>{ props.firstname + " " + props.lastname }</b>
        </div>
        <div className="col-sm-12 col-lg-4">
          Eilės nr.: <b>{ props.ticket }</b>
        </div>
        <div className="col-sm-12 col-lg-4">
          <button className="btn btn-light" onClick={() => props.removeItem(props.ticket)}>Aptarnauta</button>
        </div>
      </div>
    </li>);
};

export default EditItem;
