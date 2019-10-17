import React from 'react';
import './Reservation.css';

const Reservation = ({id, name, date, time, guests, deleteReservation}) => {
    console.log(name);
    return (
        <section className='reservation'>
          <h2>{name}</h2>
          <p>{date}</p>
          <p>{time} pm</p>
          <p>Number of guests:{guests}</p>
          {/* <button onClick={deleteReservation(id)}> Cancel </button> */}
        </section>
    )
}

export default Reservation;