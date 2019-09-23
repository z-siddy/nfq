import React from 'react';

const EditItem = (props) => {
  const button = !props.attended ? 
    <button className="btn btn-light" onClick={() => props.removeItem(props.ticket)}>Aptarnauta</button>
    :
    <span style={{color: 'red'}}>APTARNAUTAS(-A)</span>

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
          { button }
        </div>
      </div>
    </li>);
};

export default EditItem;
