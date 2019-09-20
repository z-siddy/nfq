import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Admin from './Admin/Admin';
import Specialist from './Specialist/Specialist';
import Board from './Board/Board';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route exact path="/" component={ Board } />
        <Route path="/specialist" component={ Specialist } />
        <Route path="/admin" component={ Admin } />
      </BrowserRouter>
    </div>
  );
}

export default App;
