import React, { Component } from 'react';
import './App.css';
import Form from '../components/Form/Form';
import ReservationsContainer from '../components/ReservationsContainer/ReservationsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => this.setState({ reservations: data }) )
  }

  addReservation = (newBooking) => {
    const newData = {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newBooking)
    }
    
    fetch('http://localhost:3001/api/v1/reservations', newData)
     .then(response => response.json())
     .then(() => this.setState({ reservations: [...this.state.reservations, newBooking]}))
     .catch(error => console.log(error))

  }

  deleteReservation = (id) => {
    let updatedBookings = this.state.reservations.filter((reservation) => reservation.id !== id);

    const deleteData = {
      method: "DELETE",
      headers: {"Content-Type" : "application/json"}
    }

    fetch(`http://localhost:3001/api/v1/reservations/:${id}`, deleteData)
      .then(response => response.json())
      .then(() => this.setState({ reservations: updatedBookings }) )
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <ReservationsContainer reservations={this.state.reservations} deleteReservation={this.deleteReservation} />
        </div>
      </div>
    )
  }
}

export default App;
