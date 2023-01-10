import React, { useState, useReducer } from "react";

import Header from '../Components/HeaderBooking';
import Bookings from '../Components/Bookings';

function BookingPage() {

    function updateTimes() {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    }
    function initializeTimes() {
        return ["17:00", "18:00", "19:00"];
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    
    

    return(
        <>
        <Header></Header>
        <Bookings availableTimes={availableTimes} dispatch={ dispatch }></Bookings>
        </>
    );
}

export default BookingPage;