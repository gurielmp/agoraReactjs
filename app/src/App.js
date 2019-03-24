import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Segment1 from './components/Segment1';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <NavBar />
       <Segment1 />
      </div>
    );
  }
}

export default App;
