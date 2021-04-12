import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AppointmentHeader from './components/AppointmentHeader/AppointmentHeader'
import BookAppointment from './components/BookAppointment/BookAppointment';

const Appointment = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <Navbar/>
            <AppointmentHeader value={value} setValue={onChange}/>
            <BookAppointment value={value}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Appointment
