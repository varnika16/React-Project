import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link, useHistory } from 'react-router-dom';
import ThemeProvider from 'layouts/ThemeProvider';

const useStyles = makeStyles((theme) => ({
  name: {
    color: 'white',
    marginRight: '1.8rem',
    fontSize: 15,
    paddingTop: 5,
  },
  login: {
    right: '20px',
    width: 'auto',
    fontSize: 15,
    color: 'white',
  },
  details: {
    right: '100px',
    width: 'auto',
    fontSize: 15,
  },
  join: {
    width: 'auto',
    fontSize: 15,
    color: '#154c79',
    fontWeight: '700',
  },
  header: {
    backgroundColor: '#154c79',
    fontFamily: 'Poppins',
    color: "white",
    width: '100%',
    padding: '10px',
    paddingTop: '10px',
    paddingBottom: '10px',
    height: '60px',
    zIndex: '1',
    transitionTimingFunction: 'ease-in',
    transition: 'all 0.5s',
    zIndex: '10',
  },
  
  header__contents :{
    display: 'flex',
    justifyContent: 'space-between',
  },
  
  header__contentRight: {
    display: 'flex',
  },
  centerItems: {
  justifyContent: 'center',
  alignItems: 'center',
  height: '60vh',
  }
}));

function Home () {
  const classes = useStyles();
  const history = useHistory();

  return(
    <>
    <ThemeProvider>
      <div className={classes.header}>
        <div className={classes.header__contents}>
          <div className={classes.header__contentLeft}>
            <Typography variant='h5'>
              Home 
            </Typography>
          </div>
          <div> 
          <Typography variant='h5'>
              AeroConsultant 
            </Typography>      
          </div>
          <div style={{display: 'flex'}}>
            <div style={{marginTop: 8}}>
            <a
           style={{marginRight: 50,   color: 'white' }}

            href='#details'
            >
              Details
            </a>
            </div>
            <div>
          <Link to="/">
          <Button
              startIcon={<ExitToAppIcon />}
              className={classes.login }
              
              disableElevation>
              Login
            </Button>
            </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.centerItems}>
        <Typography variant='h3' style={{color: '#154c79', fontWeight: 700, textAlign: "center", marginTop: '15%'}} >
        Pool of Consultants in 100+ countries
        </Typography>
      
      <br/>
      <Link to="/">
      <Button
              className={classes.join}
              variant='contained'
              style= {{marginLeft: "45%"}}
              disableElevation>
              Join Us
      </Button>
      </Link>
        </div>
        <Typography variant='h3' style={{marginLeft: 40, fontWeight: 600, color: '#154c79'}} > 
          DETAILS
        </Typography>
        <Grid style={{marginBottom: 90, height: '60vh'}} id="details" container spacing={1}>
        <Grid container item xs={12} md={4} style={{marginLeft: 30}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ANA_777-300_Taking_off_from_JFK.jpg/450px-ANA_777-300_Taking_off_from_JFK.jpg" />
          </Grid>
          <Grid container item xs={12} md={7}>
          <Typography style={{alignText: ''}}>
          <p>
            The Wright brothers invented and flew the first airplane in 1903, recognized as "the first sustained and controlled heavier-than-air powered flight". They built on the works of George Cayley dating from 1799, when he set forth the concept of the modern airplane (and later built and flew models and successful passenger-carrying gliders). Between 1867 and 1896, the German pioneer of human aviation Otto Lilienthal also studied heavier-than-air flight. 
          </p>
          <p>
            Following its limited use in World War I, aircraft technology continued to develop. Airplanes had a presence in all the major battles of World War II. The first jet aircraft was the German Heinkel He 178 in 1939. The first jet airliner, the de Havilland Comet, was introduced in 1952. The Boeing 707, the first widely successful commercial jet, was in commercial service for more than 50 years, from 1958 to at least 2013.
           </p>
          <p>
            Airplanes come in a variety of sizes, shapes, and wing configurations. The broad spectrum of uses for airplanes includes recreation, transportation of goods and people, military, and research. 
            </p>
            <p>
            Worldwide, commercial aviation transports more than four billion passengers annually on airliners and transports more than 200 billion tonne-kilometers of cargo annually, which is less than 1% of the world's cargo movement. Most airplanes are flown by a pilot on board the aircraft, but some are designed to be remotely or computer-controlled such as drones.
          </p>
          </Typography>
          </Grid>
          </Grid>
        </ThemeProvider>
    </>
  )
}

export default Home