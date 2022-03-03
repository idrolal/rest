import React from 'react';

function AdminCreateReservation(props) {
  return (
    <>
      {
        localStorage.getItem('token') &&
        <div className='app-container'>
          <h1>Admin Create Reservation</h1>
        </div>
      }
    </>
  );
}

export default AdminCreateReservation;
