import React from 'react';
import './ReservationsContainer.css';
import Reservation from '../Reservation/Reservation';

const ReservationsContainer = ({reservations, deleteReservation}) => {
  const allReservations = reservations.map((reserve) => {
      return <Reservation 
              key={Date.now()} 
              {...reserve} 
              deleteReservation={deleteReservation} />
  })
    return (
      <section className='reservations-container'>
        {allReservations}
      </section>
    )
}

export default ReservationsContainer;