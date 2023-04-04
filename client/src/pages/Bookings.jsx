//Shows all current bookings 
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './form.css';

const  Bookings=()=> {

  const [bookings,setBookings] = useState([])

  useEffect(()=>{
    const fetchAllBookings = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/bookings")
        setBookings(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchAllBookings()
  },[])

  // const str1 = "DATE_FORMAT(date_from, '%W %M %e %Y' )"
  // const str2 = "DATE_FORMAT(date_to, '%W %M %e %Y' )"
  
  return (
    <>
      
      <div className='bookings'>

      <div className="container">
  <h2>Active Bookings </h2>
  <ul className="responsive-table">
    <li className="table-header">
      <div className="col col-1">ID</div>
      <div className="col col-2">Guest Name</div>
      <div className="col col-3">Hotel</div>
      <div className="col col-4">Room</div>
      <div className="col col-5">Checkin</div>
      <div className="col col-6">CheckOut</div>
    </li>

    {bookings.map(booking=>(
      <li className="table-row" key={booking.bookingid}>
      <div className="col col-1" data-label="ID" >{booking.bookingid}</div>
      <div className="col col-2" data-label="Name">{booking.gname}</div>
      <div className="col col-3" data-label="HOTEL">{booking.hname}</div>
      <div className="col col-4" data-label="ROOM">{booking.room_type}</div>
      <div className="col col-5" data-label="CheckIN">{booking.checkin}</div>
      <div className="col col-6" data-label="CheckOUT">{booking.checkout}</div>

    </li>
        ))}
    
        
  </ul>
</div>



        
      </div>
    </>
  )
}

export default Bookings;

