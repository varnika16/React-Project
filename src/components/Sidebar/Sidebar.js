/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

import logo from "assets/img/reactlogo.png";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { enable } from "app/sidebarSlice";
import { disable } from "app/sidebarSlice";
import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PaymentIcon from '@material-ui/icons/Payment';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Link } from 'react-router-dom' ; 

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});

function Sidebar({ color, image, routes }) {
  const classes = useStyles();
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  const anchor = 'left'
  const dispatch = useDispatch();
  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    if(open===true)  dispatch(enable())
    else  dispatch(disable())
  };
  return (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Dashboard', 'Home', 'Invoice', 'Notifications'].map((text, index) => (
          <Link to= {index===0 ? '/' : index===1 ? '/home' : '/' }>
          <ListItem button key={text}>
            <ListItemIcon>{index === 0 ? <DashboardIcon /> : index == 1 ? <HomeIcon /> : index == 2 ? <PaymentIcon /> : index == 3 ? < NotificationsIcon /> : null}</ListItemIcon>
            <ListItemText primary={text} style= {{color: 'black'}} />
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>

        {['Users', 'Clients', 'Accounts'].map((text, index) => (
          <Link to=  '/'  >
          <ListItem button key={text}>
            <ListItemIcon>{index === 0 ? <PersonIcon /> : index == 1 ? <PeopleIcon /> : index == 2 ? <AccountBalanceIcon /> : null}</ListItemIcon>
            <ListItemText primary={text} style={{ color: 'black'}} />
          
            
            </ListItem>
            </Link>
        ))}
        
      </List>
    </div>
  );
}

export default Sidebar;
