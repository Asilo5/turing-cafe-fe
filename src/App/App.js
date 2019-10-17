import React, { Component } from 'react';
import './App.css';
import Form from '../components/Form/Form';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
