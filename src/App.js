import React, { Component } from 'react';

import Navbar from './components/Navbar';
import './App.css';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return(
      <div>
        <Navbar/>
      </div>
    )
  }
}

export default App;
