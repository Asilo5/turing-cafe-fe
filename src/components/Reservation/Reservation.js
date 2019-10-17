import React from 'react';
import './Reservation.css';

const Reservation = ({id, name, date, time, number, deleteReservation}) => {
    console.log(deleteReservation);
    return (
        <section className='reservation'>
          <h2>{name}</h2>
          <p>{date}</p>
          <p>{time} pm</p>
          <p>Number of guests: {number}</p>
          {/* <button onClick={deleteReservation(id)}> Cancel </button> */}
        </section>
    )
}

export default Reservation;