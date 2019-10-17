import React, { Component } from 'react';
import './App.css';
import Form from '../components/Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {

  }

  addReservation = (newBooking) => {
    this.setState({ reservations: [...this.state.reservations, newBooking]})
  }

  deleteReservation = (id) => {
    let updatedBookings = this.state.reservations.filter((reservation) => reservation.id !== id);

    this.setState({ reservations: updatedBookings })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
