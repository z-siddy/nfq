import React from 'react';
import Client from './Client';

const SpecialistClients = (props) => {
  let clients = props.clients.filter((main) => !main.attended);
  const aquaBg = {background: 'aquamarine'};
  return (
    <div className="row">
      <div className="col-12">
        <h1>SPECIALISTAS { props.name }</h1>
      </div>
      <div className="col-12">
        <ul className="list-group">
          { 
            clients.slice(0,2).map((client,index) => 
              !client.attended ? <Client { ...client } key={index} bg={ index==0 ? aquaBg : null } /> : null
            )
          }
        </ul>
      </div>
    </div>);
};

export default SpecialistClients;
