//to insert new booking
import React from 'react'
import './bookform.css'
import Bookings from './Bookings'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Newbooking= () =>{

  //Handling hotel name drop down menu
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

  const [hvalue, setHvalue] = React.useState(1);

 const handleChange = (event) => {

   setHvalue(event.target.value);
   

 };
  console.log(hvalue);

//handling change in form -- updates
const navigate = useNavigate()

const [booking,setBooking] = useState({
  gname:"",
  checkin:"",
  checkout:"",
  address:"",
  hno:null,
  phone:""
})

const handleformChange = (e)=>{
  setBooking((prev)=>({...prev, [e.target.name]:e.target.value}));
  
}


//subbmit button
const handleClick = async e =>{
  e.preventDefault()
  try{
      const res = await axios.get("http://localhost:8800/id")
      console.log("booking id = ",res.data[0].id)
      booking.bookingid = res.data[0].id
      booking.hno=hvalue
      console.log(booking);
      await axios.post("http://localhost:8800/insert",booking)
      navigate("/bookings")
  }catch(err){
    console.log(err)  
  }

}
 

  return <>
    <header className="hero">
        <img className="hero-img" src='images/newbookingHero.jpg'/>
        <h1 className="hero-heading"><span className="header-imp">Book</span> hotels <span className="header-imp">Hastle-free</span> from<span className="header-imp"> HotelsShowcase.com</span></h1>
    </header>

    <div className="full-screen newbooking">
    <h2>Book a Hotel</h2>
    <div className="page">

    <div>
      <span>SELCT HOTEL</span><br/>
     <select value={hvalue} onChange={handleChange}>
      {hotels.map(hotel=>(
        <option value={hotel.hno} key={hotel.hno}>{hotel.hname} -- {hotel.room_type}</option>
      ))
      }
     </select>
     
    </div>



  <div className="field field_v1">
    <label  className="ha-screen-reader">Name</label>
    <input id="first-name" className="field__input" placeholder="        " name='gname' onChange={handleformChange}/>
    <span className="field__label-wrap" aria-hidden="true">
      <span className="field__label">Name</span>
    </span>
  </div>
  <div className="field field_v2">
    <label  className="ha-screen-reader">Phone</label>
    <input id="last-name"  className="field__input" placeholder="   " name='phone' onChange={handleformChange}/> 
    <span className="field__label-wrap" aria-hidden="true">
      <span className="field__label">Phone</span>
    </span>
  </div>    
  <div className="field field_v3">
    <label className="ha-screen-reader">Address</label>
    <input id="email" className="field__input" placeholder="     " name='address' onChange={handleformChange}/>
    <span className="field__label-wrap" aria-hidden="true">
      <span className="field__label">Address</span>
    </span>
  </div>

  <div className="field field_v3">
    <label className="ha-screen-reader">CheckIN Date</label>
    <input id="email" className="field__input" placeholder="     " name='checkin' onChange={handleformChange}/>
    <span className="field__label-wrap" aria-hidden="true">
      <span className="field__label">CheckIN YYYY/MM/DD</span>
    </span>
  </div>

  <div className="field field_v3">
    <label className="ha-screen-reader">CheckOut Date</label>
    <input id="email" className="field__input" placeholder="     " name='checkout' onChange={handleformChange}/>
    <span className="field__label-wrap" aria-hidden="true">
      <span className="field__label">CheckOut YYYY/MM/DD</span>
    </span>
  </div>
  <button onClick={handleClick}>SUBMIT</button>
</div>
    </div>

    
  </>

  
  
}

export default Newbooking
