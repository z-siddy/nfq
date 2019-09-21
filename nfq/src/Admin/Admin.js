import React from 'react';
import NavbarHandler from '../NavbarHandler';
import './Admin.css';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specialists: props.state,
      selectedSpecialist: null,
      firstname: null,
      lastname: null,
      ticket: props.currentTicket + 1
    };
  }

  specialistChange(event) {
    let value = event.target.value;
    this.setState({
        selectedSpecialist: value,
    });
  }

  fnameChange(event) {
    let value = event.target.value;
    this.setState({
        firstname: value,
    });
  }

  lnameChange(event) {
    let value = event.target.value;
    this.setState({
        lastname: value,
    });
  }

  render() {
    const specialistSelect = this.state.specialists.map(item => 
      <option key={item.id} value={item.id}>{item.name}</option>  
    );
    return (
        <div>
          <div>
            <div id="content">
              <NavbarHandler pageName="Administracijai"/>
              <div className="row">
                <div className="col-sm-12 col-lg-6">
                  <h2>Funkcijos</h2>
                </div> 
                <div className="col-sm-12 col-lg-6">
                  <button className="btn btn-light" onClick={this.props.saveToLS}>Išsaugoti duomenis į <code>localStorage</code></button>
                </div>
              </div>
              <div className="row mar-top">
                <div className="col-sm-12 col-lg-6">
                  <h2>Pridėti naują klientą</h2>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="specialist-select">Pasirinkite specialistą</label>
                      <select className="form-control" id="new-spec" defaultValue={"DEFAULT"} onChange={(e) => this.specialistChange(e)}>
                        <option value="DEFAULT" disabled>...</option>
                        {specialistSelect}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="new-firstname">Vardas</label>
                      <input type="text" className="form-control" id="new-firstname" placeholder="Paulius" onChange={(e) => this.fnameChange(e)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="new-lastname">Pavardė</label>
                      <input type="text" className="form-control" id="new-lastname" placeholder="Paršauskas" onChange={(e) => this.lnameChange(e)} />
                    </div>
                    <button className="btn btn-light" onClick={() => this.props.add(this.state)}>Pridėti naują klientą</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Admin;
