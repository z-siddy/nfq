import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar/Navbar';
import Admin from './Admin/Admin';
import Specialist from './Specialist/Specialist';
import Board from './Board/Board';
import SpecialistClients from './SpecialistClients';
import ls from 'local-storage';
import update from 'immutability-helper';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.saveStateToLS = this.saveStateToLS.bind(this);
    this.addClient = this.addClient.bind(this);
    this.removeThis = this.removeThis.bind(this);
    this.state = {
      specialists: [],
      currentTicket: 0
    };
  }

  componentDidMount() {
    axios.get(`./specialists.json`)
      .then((res) => {
        const specialists = res.data;
        this.setState({ specialists });
      },(error) => {
        console.log("Nepavyko nuskaityti specialistų duomenų");
      });

    axios.get(`./clients.json`)
      .then((res) => {
        let specialists = this.state.specialists;
        specialists.map((spec, index) => 
          res.data.map(client => {
            if(client.specialist == spec.id){
              specialists[index].clients.push(client);
            }
            if(client.ticket > this.state.currentTicket)
              this.setState({ currentTicket: client.ticket });
          })
        );
        specialists.sort((a,b) => a.id - b.id);
        specialists.map(item => 
          item.clients.sort((a,b) => a.ticket - b.ticket)  
        );
        this.setState({
          specialists
        });

      },(error) => {
        console.log("Nepavyko nuskaityti lankytojų duomenų");
      });
  }

  saveStateToLS() {
    let process = ls.set('data', this.state);
    if(process)
      alert("Sėkmingai išsaugojote duomenis į localStorage");
  }

  addClient(data) {
    let specialists = this.state.specialists;
    const newClient = {
      firstname: data.firstname,
      lastname: data.lastname,
      specialist: data.selectedSpecialist,
      ticket: data.ticket,
      attended: false
    };
    let idx;
    const temp = specialists.map((item,index) => 
      item.id == data.selectedSpecialist ? idx = index : null
    );
    specialists[idx] = update(specialists[idx], { clients: { $push: [newClient] } });
    this.setState({ specialists, currentTicket: data.ticket });
    ls.set('data', this.state);
    alert('Užregistruota sėkmingai!');
  }

  removeThis = ticket => {
    let specialists = this.state.specialists;
    let idx = [];
    const temp = specialists.map((item,index1) => 
      item.clients.map((client,index2) => 
          client.ticket == ticket ? idx.push({index1, index2}) : null 
      )
    );
    let t1 = idx[0].index1;
    let t2 = idx[0].index2;
    const attended = { attended: true };
    specialists[t1] = update(specialists[t1], { clients: { [t2]: {$merge: attended} } });
    this.setState({ specialists });
    ls.set('data', this.state);
  };

  render() {
    const items = this.state.specialists.map((item, index) =>
        item.clients.length > 0 ? (
          <SpecialistClients { ...item } key={index} />
        ) : (
          null
        )
    );

    let count = this.state.specialists.length < 1 ? <h1>Nepavyko nuskaityti lankytojų duomenų</h1> : null;

    return (
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          {count}
          <Route exact path="/" component={ () => <Board items={items.length > 0 ? items : count} /> } />
          <Route path="/specialist" component={ () => <Specialist state={this.state.specialists} remove={this.removeThis} /> }/>
          <Route path="/admin" component={
            () => <Admin currentTicket={this.state.currentTicket} state={this.state.specialists} saveToLS={this.saveStateToLS} add={this.addClient} />
          } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
