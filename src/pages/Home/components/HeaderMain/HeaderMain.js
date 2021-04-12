import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import chair from "../../../../images/chair.png";

const useStyles = makeStyles({
    main:{
         height:"600px"
    },
    headerTitle:{
        color:"#3A4256"
    },
    headerMainImg:{
      width:"680px"
    },
    getAppointmentBtn: {
      backgroundImage: "linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed)",
      color:"white",
      fontSize:"15px",
      fontWeight:"600",
    }
})

const HeaderMain = () => {
    const classes = useStyles()
  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.main}>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Typography variant="h3" className={classes.headerTitle}>
          Your New Smile <br /> Starts Here
        </Typography> <br/>
        <Typography variant="subtitle1" color="primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Qui
          cupiditate quisquam dignissimos quia, quod fuga id, <br/> vitae modi
          blanditiis asperiores iure sunt dolorum maiores officiis.
        </Typography>  <br/>
        <Link to="/appointment" style={{textDecoration:"none"}}>
        <Button variant="contained" className={classes.getAppointmentBtn}> GET APPOINTMENT </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <img className={classes.headerMainImg} src={chair} alt="chair picture" />
      </Grid>
    </Grid>
  );
};

export default HeaderMain;
