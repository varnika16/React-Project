import React, {useState} from "react";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import peopleData from '../data';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import EditIcon from '@material-ui/icons/Edit';
import StarsIcon from '@material-ui/icons/Stars';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Divider } from "@material-ui/core";
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 50,
  },

  root: {
    width: '90%',
    height: 385,
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  title: { 
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  header: {
    display: 'flex',
    
  },
  mid: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5px',
    width: 'auto',
  },
  button: {
   backgroundColor: 'white',
   margin: 8,
  },
  green: {
    backgroundColor: "#0abb87"
  },
  red: {
    backgroundColor: red[400]
  }
}));

function Dashboard() {

  const classes = useStyles();
  const [peoples, setPeoples] = useState(peopleData);

  const handleLike = (index) => {
    console.log(index, "iL");
    let tempData = [...peoples];
    tempData[index].like = !tempData[index].like;
    setPeoples(tempData);
  }

  function FormRow({people, index}) {
  return (
    
    <React.Fragment>
      <Card className={classes.root} variant="outlined" key={people.id}>
      
      <CardHeader className={classes.header}
        avatar={
          <>
          
          <Avatar aria-label="person" style={{backgroundColor: '#0abb87'}} className={classes.avatar}>
            {people.fname.substring(0, 1)}{people.lname.substring(0, 1)}
          </Avatar>
          </>
        }

        action={
          <>
          <Rating name="pristine" value={people.rating} size="small" />
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
          </>
        }   
        title={`${people.fname}${' '}${people.lname}${' '}`}
        subheader={`${people.city}${', '}${people.country}${', '}${people.phone}`} 
        
      />
      <CardContent style={{marginTop: -20, color: 'grey' }}>
        <Typography variant="body2">{people.summary}</Typography>
      </CardContent>
        <Divider style={{marginTop: -10}} />
      <CardContent>
      <div className={classes.mid}>
        <div>
          <Typography style={{fontSize: 16}}>
              Aircraft
          </Typography>
          <Typography style={{fontSize: 12, color: 'grey'}}>
             {people.aircraft}
          </Typography>
          </div>
          <div>
          <Typography style={{fontSize: 16}}>
              Helicopter
          </Typography>
          <Typography style={{fontSize: 12, color: 'grey'}}>
             {people.helicopter}
          </Typography>
          </div>
          <div>
          <Typography style={{fontSize: 16}}>
              Power Plant
          </Typography>
          <Typography style={{fontSize: 12, color: 'grey'}}>
             {people.power_plant}
          </Typography>
          </div>
          </div>
            <div style={{marginLeft: -16, marginTop: 8}}>

          <IconButton aria-label="favourite" onClick={()=> handleLike(index)} >
           {people.like ? <FavoriteIcon style={{color: red[600]}}/> : < FavoriteBorderIcon /> } 
          </IconButton>
          <IconButton style={{marginLeft: -12}} aria-label="share">
            < ShareIcon />
          </IconButton>
          <Button
              startIcon={<GetAppIcon />}
              disableElevation>
              DOWNLOAD
            </Button>
            </div>
            <div>
           
            <Button  variant='contained' className={`${classes.button} ${people.approve && classes.green}`}>
              APPROVE
            </Button>
            <Button  variant='contained' className={`${classes.button} ${people.disapprove && classes.red}`}>
              DISAPPROVE
            </Button>
            </div>
            <div>
            <Button  variant='contained' className={`${classes.button} ${people.available && classes.green}`}>
              AVAILABLE
            </Button>
            <Button  variant='contained' className={`${classes.button} ${people.not_available && classes.red}`}>
              NOT AVAILABLE
            </Button>
            </div>
            <div>
            <Button  variant='contained' className={classes.button}>
              EDIT NOTES AND RATE
            </Button>
            </div>
          
      </CardContent>
      </Card>
      </React.Fragment>
 );
}
  return (
    <div className={classes.root}>
      <Grid style={{marginLeft: 65}} container spacing={1}>
        {peoples.map((people, index) => (
          <Grid container item xs={12} md={4}>
          <FormRow people={people} index={index} />
        </Grid>
        ))}
        </Grid>
    </div>
  );
}

export default Dashboard;
