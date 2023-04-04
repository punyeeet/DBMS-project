import {
  
  BrowserRouter as Router,Route, Routes
   
} from "react-router-dom";

import React from "react";

import Hotels from './pages/Hotels';
import Bookings from "./pages/Bookings";
import Newbooking from "./pages/Newbooking";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";


const App=()=> {
  return (
   
   <div className="App">
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Newbooking/>}/>
        <Route path="/bookings" element={<Bookings/>}/>
        <Route path="/hotels" element={<Hotels/>}/>
        
        

      </Routes>
      </Router>
    <Footer/>
   </div> 

      
      
    
  );
};

export default App;
