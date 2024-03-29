import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { createMuiTheme,ThemeProvider } from '@material-ui/core'
import {useHistory} from "react-router-dom"

const drawerWidth = 240;





const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    
  },
  

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
page:{
      width: "100%",
      marginTop:"100px",
      marginLeft:"10px"
      
  }
  



}));


















function MaterialUi({children}) {

  const history= useHistory()



  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  const MyList = [

    {
      text : "Home",
      icon :<InboxIcon />,
      path :"/"
    },
     {
      text : "Contract",
      icon :<InboxIcon />,
      path :"/contract"
    }






  ]
  








  const drawer = (
    <div  className={classes.root}>
      <div className={classes.toolbar} />
      
      <List style={{marginTop:"60px"}}>
        {MyList.map((text, index) => (


          <ListItem button  onClick={()=>history.push(text.path)}>

           


           <ListItemIcon>{text.icon}</ListItemIcon>

          
          
           <ListItemText>{text.text}</ListItemText>
          
          </ListItem>



        ))}
       
        




      </List>
    </div>
  );




  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>

        <Toolbar style={{backgroundColor:'#413b63'}}>
         
            <MenuIcon />
          
         
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <div className={classes.page}>
      {children}

      </div>




    </div>
  );
}


export default MaterialUi