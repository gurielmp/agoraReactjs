import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Segment1 from './components/Segment1';
import MediaQuery from './components/CSSOnJs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <NavBar />
       <Segment1 />
       <MediaQuery />
      </div>
    );
  }
}

export default App;
