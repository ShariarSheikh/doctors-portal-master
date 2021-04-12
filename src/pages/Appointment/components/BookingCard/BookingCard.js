import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const useStyles = makeStyles({
  bookingCard: {
    width: "400px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "20px",
    marginBottom: "20px",
    padding:"30px",
    boxShadow: "0px 3px 9px 0px #0000001f",
    borderRadius: "5px"
  },
  bookingCardTopText:{
    color:"#10bacb",
    marginBottom:"10px",
    fontWeight: "600"
  },
  bookingCardTimeText: {
    fontWeight: "bold",
    color:"#4f4e4e"
  },
  bookingCardSpaceAvailableText:{
   color:"#9b9b9b"
  }
});

const BookingCard = (props) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
  const classes = useStyles();
  const { subject, visitingHour, totalSpace } = props.data;
  return (
    <Grid item className={classes.bookingCard}>
        <Typography variant="h5" className={classes.bookingCardTopText}>{subject}</Typography>
        <Typography variant="subtitle1" className={classes.bookingCardTimeText}>{visitingHour}</Typography>
        <Typography variant="caption" className={classes.bookingCardSpaceAvailableText}>
          {totalSpace} SPACES AVAILABLE
        </Typography>
         <button className="book-appointment-btn" onClick={openModal}>BOOK APPOINTMENT</button>
     <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn = {subject} />
    </Grid>
  );
};

export default BookingCard;
