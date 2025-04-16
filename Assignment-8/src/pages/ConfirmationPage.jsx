import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const { state } = useLocation();

  return (
    <div className="confirmation">
      <h2>Seat Booked Successfully!</h2>
      <p>Booking ID: <strong>{state.bookingId}</strong></p>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
    </div>
  );
};

export default ConfirmationPage;
