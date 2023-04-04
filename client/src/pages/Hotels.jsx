//All available rooms and hotels
import React from 'react'
import './form.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Hotels = () => {
  const [hotels,setHotels] = useState([])
useEffect(()=>{
  const fetchAllHotels = async ()=>{
    try{
      const res = await axios.get("http://localhost:8800/hotels")
      setHotels(res.data);
    }catch(err){
      console.log(err);
    }
  }
  fetchAllHotels()
},[])

  return (


    <>
      
    <div className='hotels'>

    <div className="container">
<h2>Available Hotels </h2>
<ul className="responsive-table">
  <li className="table-header">
    <div className="col col-1">No.</div>
    <div className="col col-2">Hotel Name</div>
    <div className="col col-3">Room Type</div>
    <div className="col col-4">Price</div>
    <div className="col col-5">City</div>
    <div className="col col-6">Phone</div>
  </li>

  {hotels.map(hotel=>(
    <li className="table-row" key={hotel.hno}>
    <div className="col col-1" data-label="No" >{hotel.hno}</div>
    <div className="col col-2" data-label="Hotel Name">{hotel.hname}</div>
    <div className="col col-3" data-label="Room Type">{hotel.room_type}</div>
    <div className="col col-4" data-label="Price">₹ {hotel.price}</div>
    <div className="col col-5" data-label="City">{hotel.city}</div>
    <div className="col col-6" data-label="Phone">{hotel.phone}</div>

  </li>
      ))}
  
      
</ul>
</div>



      
    </div>
  </>

  )
}

export default Hotels
