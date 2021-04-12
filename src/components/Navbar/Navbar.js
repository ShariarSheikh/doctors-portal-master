import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navStyle: {
    display: "flex",
    justifyContent: "flex-end",
  },
  navItem: {
    listStyle: "none",
    padding: 0,
    display: "flex",
  },
  links: {
    color: "black",
    textDecoration: "none",
    fontWeight: "500",
  },
  navItems: {
    width: "auto",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="static" color="transparent">
        <Toolbar className={classes.navStyle}>
          <List className={classes.navItem}>
            <ListItem className={classes.navItems}>
              <Link className={classes.links} to="/">
                Home
              </Link>
            </ListItem>
            <ListItem className={classes.navItems}>
              <Link className={classes.links} to="/about">
                About
              </Link>
            </ListItem>
            <ListItem className={classes.navItems}>
              <Link className={classes.links} to="/appointment">
                Dental Services
              </Link>
            </ListItem>
            <ListItem className={classes.navItems}>
              <Link className={classes.links} to="/services">
                Reviews
              </Link>
            </ListItem>
            <ListItem className={classes.navItems}>
              <Link className={classes.links} to="/services">
                Blog
              </Link>
            </ListItem>
            <ListItem className={classes.navItems}>
              <Link className={classes.links} to="/services">
                Contact Us
              </Link>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
