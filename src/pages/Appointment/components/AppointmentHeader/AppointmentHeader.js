import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import chair from "../../../../images/chair.png";

const useStyles = makeStyles({
  main: {
    height: "600px",
  },
  headerTitle: {
    color: "#3A4256",
  },
  headerMainImg: {
    width: "680px",
  },
  getAppointmentBtn: {
    backgroundImage:
      "linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed)",
    color: "white",
    fontSize: "15px",
    fontWeight: "600",
  },
});

const AppointmentHeader = ({ setValue, value }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.main}
    >
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Typography variant="h2" className={classes.headerTitle}>
          Appointment
        </Typography>
        <br />
        <Calendar onChange={setValue} value={value} />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <img
          className={classes.headerMainImg}
          src={chair}
          alt="chair picture"
        />
      </Grid>
    </Grid>
  );
};

export default AppointmentHeader;
