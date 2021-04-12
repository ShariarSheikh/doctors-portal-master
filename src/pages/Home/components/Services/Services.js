import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    servicesTop:{
        textAlign: 'center',
        marginTop:"50px",
    },
    servicesTopText:{
        fontWeight:"bold",
        color:"rgb(0, 188, 212)",
        marginBottom:"10px"
    }
})

const Services = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid container justify="center" direction="column" className={classes.servicesTop}>
                <Typography variant="subtitle1" className={classes.servicesTopText}>OUR SERVICES</Typography>
                <Typography variant="h4" color="initial" >Services We Provide</Typography>
            </Grid>
        </Grid>
    )
}

export default Services
