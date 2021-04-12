import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles({
    cart:{
        width:"350px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        padding:"20px",
        margin:"0px",
        marginLeft:"50px"
    }
})

const InfoCard = (props) => {
    const classes = useStyles()
    const {title,description,icon,background} = props.info
    return (
        <Grid container className={classes.cart} style={{background: background}} spacing={2}>
            <Grid item>
                 {icon}
            </Grid>
            <Grid item>
                 <Typography variant="subtitle1">{title}</Typography>
                 <Typography variant="subtitle2">{description}</Typography>
            </Grid>
        </Grid>
    )
}

export default InfoCard
