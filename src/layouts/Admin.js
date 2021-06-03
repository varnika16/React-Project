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
import { useLocation, Route, Switch } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import sidebarImage from "assets/img/sidebar-3.jpg";
import Sidebar from "components/Sidebar/Sidebar";
//import toggleDrawer from '../util'
import { useSelector } from 'react-redux';
import { disable, enable, selectSidebar } from '../app/sidebarSlice';
import { SwipeableDrawer } from "@material-ui/core";
import { useDispatch } from 'react-redux';

function Admin() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  var sidebar = useSelector(selectSidebar); 
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);

  
  const dispatch = useDispatch();
  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    if(open===true)  dispatch(enable())
    else  dispatch(disable())
  };
  return (
    <>
      <div className="wrapper">
      <SwipeableDrawer
                anchor='left'
                open={sidebar}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)} 
              >
                <Sidebar color={color} image={image} routes={routes} />
          </SwipeableDrawer>
         {/* <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />  */}
        <div ref={mainPanel}>
          <AdminNavbar color={color} image={hasImage ? image : ""} routes={routes} />
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
        </div>
      </div>

    </>
  );
}

export default Admin;
