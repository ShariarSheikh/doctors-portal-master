import React from "react";
import { BiTime } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import InfoCard from "../InfoCard/InfoCard";
import { Grid } from "@material-ui/core";


const infoData = [
  {
    id:1 ,
    title: "Opening Hours",
    description: "We are open 7 days",
    icon: <BiTime style={{fontSize:'30px'}}/> ,
    background: "#00bcd4",
  },
  {
    id:2 ,
    title: "Visit our location",
    description: "Brooklyn, NY 10003 USA",
    icon: <GoLocation style={{fontSize:'30px'}}/> ,
    background: "#3A4256",
  },
  {
    id: 3,
    title: "Contact us now",
    description: "+ 15285273285",
    icon: <FiPhoneCall style={{fontSize:'30px'}}/> ,
    background: "#00bcd4",
  },
];

const BusinessInfo = () => {
  return <Grid container justify="center">
    {
      infoData.map(info => <InfoCard info={info} key={info.id}/>)
    }
  </Grid>
};

export default BusinessInfo;
