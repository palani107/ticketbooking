import React, { useState, useEffect } from 'react';
import '../src/Home.css';

function Home() {
  // State variables to manage form inputs
  const [movie, setMovie] = useState('');
  const [time, setTime] = useState('');
  const [seat, setSeat] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [payment, setPayment] = useState('');

  // useEffect to log form data whenever it changes
  useEffect(() => {
    console.log('Form data updated:', { movie, time, seat, name, phone, email, payment });
  }, [movie, time, seat, name, phone, email, payment]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    console.log('Submitted Data:', { movie, time, seat, name, phone, email, payment });
  };

  return (
    <div>
      <center>
        <h2>Ticket Booking Form</h2>
        <form className="ctn" onSubmit={handleSubmit}>
          <div>
            <label>Select Movie:</label>
            <input
              type="text"
              placeholder="Enter the movie name"
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
            />
            <br />
          </div>
          <br />
          <div>
            <label>Time:</label>
            <input
              type="text"
              placeholder="Show time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>Seat Slot:</label>
            <input
              type="text"
              placeholder="Enter the preferred seat"
              value={seat}
              onChange={(e) => setSeat(e.target.value)}
            />
            <br />
          </div>
          <br />
          <div>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>Phone Number:</label>
            <input
              type="number"
              placeholder="Enter a Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>Mail ID:</label>
            <input
              type="email"
              placeholder="Enter your Mail ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>Payment:</label>
            <input
              type="number"
              placeholder="Enter the payment"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
          <br />
          <br />
        </form>
      </center>
    </div>
  );
}

export default Home;
