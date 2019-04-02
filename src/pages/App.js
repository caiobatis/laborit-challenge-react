import React, { Component } from 'react';
import Header from '../components/Header/Header'
import Cars from '../components/Cars/Cars'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={'Laborit'}/>
        <Cars/>
      </div>
    );
  }
}

export default App;
