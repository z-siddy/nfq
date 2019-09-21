import React from 'react';
import NavbarHandler from '../NavbarHandler';
import './Specialist.css';
import EditList from './EditList';

class Specialist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specialists: props.state,
      selectedSpecialist: null,
      list: null
    };
  }

  handleChange(event) {
    let value = event.target.value;
    let list = this.state.specialists.map((item,index) => 
      item.id == value ?
        <EditList { ...item } key={index} removeItem={this.props.remove} /> : null
    );
    this.setState({
        selectedSpecialist: value,
        list: list
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
              <NavbarHandler pageName="Specialistams"/>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="specialist-select">Pasirinkite specialistą</label>
                    <select className="form-control" id="specialist-select" defaultValue={"DEFAULT"} onChange={(e) => this.handleChange(e)}>
                      <option value="DEFAULT" disabled>...</option>
                      {specialistSelect}
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  {this.state.list}
                </div>
              </div>        
            </div>
          </div>
        </div>
    );
  }
}

export default Specialist;
