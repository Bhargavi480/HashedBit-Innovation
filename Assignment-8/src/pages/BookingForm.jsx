import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(100000 + Math.random() * 900000);
    navigate('/confirmation', { state: { ...formData, bookingId } });
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Book Your Seat</h2>
      <input name="name" placeholder="Name" required onChange={handleChange} />
      <input name="email" placeholder="Email" required onChange={handleChange} />
      <input name="mobile" placeholder="Mobile" required onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
