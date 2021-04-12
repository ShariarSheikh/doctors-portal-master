import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react'
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        id:1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 12:00 PM',
        totalSpace:10,
    },
    {
        id:2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:00 AM - 12:00 AM',
        totalSpace:10,
    },
    {
        id:3,
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 PM - 6:00 PM',
        totalSpace:10,
    },
    {
        id:4,
        subject: 'Cavity Protection',
        visitingHour: '7:00 AM - 8:00 AM',
        totalSpace:10,
    },
    {
        id:5,
        subject: 'Teeth Cleaning',
        visitingHour: '7:00 AM - 8:00 AM',
        totalSpace:10,
    },
    {
        id:6,
        subject: 'Cosmetic Dentistry',
        visitingHour: '7:00 AM - 8:00 AM',
        totalSpace:10,
    },
]

const BookAppointment = (props) => {
   const date = props
    return (
        <>
            <Typography variant="h3" color="primary" style={{textAlign: 'center'}}>
                Available Appointment on 
            </Typography>
            <Grid container justify="center" style={{marginTop:"20px"}}>
               {
                   bookingData.map(data => <BookingCard date={date} data={data} key={data.id}/> )
               }
            </Grid>
        </>
    )
}

export default BookAppointment
