import React , { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        date: '',
        time: '',
        guests: ''
      }
    }



    render() {
      return (
          <form>
            <input className='name-input'
                   placeholder='Name' 
                   name='name'
                   value={this.state.name}  />
            <input className='date-input'
                   placeholder='Date (mm/dd)' 
                   name='date'
                   value={this.state.date} />
            <input className='time-input'
                   placeholder='Time' 
                   name='time'
                   value={this.state.time} />
            <input className='guests-input'
                   placeholder='Number of guests' 
                   name='guests'
                   value={this.state.guests} />
            <button>Make Reservation</button>
          </form>
      )
    }
}

export default Form;