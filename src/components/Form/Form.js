import React , { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        date: '',
        time: '',
        number: 0
      }
    }

handleChange = (e) => {
  this.setState({ [e.target.name] : e.target.value })
  this.setState({ number : parseInt(e.target.value) })
}

submitReservation = (e) => {
  e.preventDefault();
  const { addReservation } = this.props;
 
  let newReservation = {
    id: Date.now(),
    ...this.state
  }

  addReservation(newReservation);

  this.clearInputs();
}

clearInputs = () => {
  this.setState({ 
    name: '',
    date: '',
    time: '',
    guests: 0 
  })
}

    render() {
      return (
          <form>
            <input className='name-input'
                   type='text'
                   placeholder='Name' 
                   name='name'
                   value={this.state.name}  
                   onChange={this.handleChange} />
            <input className='date-input'
                   type='text'
                   placeholder='Date (mm/dd)' 
                   name='date'
                   value={this.state.date} 
                   onChange={this.handleChange} />
            <input className='time-input'
                   type='text'
                   placeholder='Time' 
                   name='time'
                   value={this.state.time} 
                   onChange={this.handleChange} />
            <input className='guests-input'
                   type='number'
                   placeholder='Number of guests' 
                   name='guests'
                   value={this.state.guests} 
                   onChange={this.handleChange} />
            <button className='reserve-btn' onClick={(e) => this.submitReservation(e)} >Make Reservation</button>
          </form>
      )
    }
}

export default Form;