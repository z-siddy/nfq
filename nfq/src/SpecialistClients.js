import React from 'react';
import Client from './Client';

const SpecialistClients = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <h1>SPECIALISTAS { props.name }</h1>
      </div>
      <div className="col-12">
        <ul className="list-group">
          { props.clients.map((client,index) => 
              <Client { ...client } key={index} />
            )
          }
        </ul>
      </div>
    </div>);
};

export default SpecialistClients;
