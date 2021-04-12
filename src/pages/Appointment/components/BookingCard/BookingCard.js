import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  bookingCard: {
    width: "350px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    border:"1px solid lightgray",
    marginRight: "20px",
    marginBottom: "20px",
    padding:"30px"
  },
});

const BookingCard = (props) => {
  const classes = useStyles();
  console.log(props);
  const { subject, visitingHour, totalSpace } = props.data;
  return (
    <Grid item className={classes.bookingCard}>

        <Typography variant="h5">{subject}</Typography>
        <Typography variant="h6">{visitingHour}</Typography>
        <Typography variant="subtitle1">
          {totalSpace} SPACES AVAILABLE
        </Typography>
        <Button variant="contained" color="primary">
          Book Now
        </Button>

    </Grid>
  );
};

export default BookingCard;
