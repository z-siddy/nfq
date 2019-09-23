import React from 'react';
import EditItem from './EditItem';

const EditList = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <h1>SPECIALISTAS { props.name }</h1>
      </div>
      <div className="col-12">
        <ul className="list-group">
          { props.clients.map((client,index) => 
              <EditItem { ...client } key={index} removeItem={props.removeItem} />
            )
          }
        </ul>
      </div>
    </div>);
};

export default EditList;
