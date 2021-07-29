import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
// import { mainListItems, secondaryListItems } from './listItems'
import ListItems from './listItems'
import { useCookies } from 'react-cookie'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import { useHistory } from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#F9F8FF',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 8px',
    fill: '#0072ea',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    color: '#000',
    fontWeight: 700,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    background: '#7865E5',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },

  logo: {
    maxWidth: 75,
  },

  style: {
    background: '#fff',
  },

  username: {
    color: '#000',
    fontWeight: 300,
  },

  divider: {
    // Theme Color, or use css color in quote
    background: 'theme.palette.divider',
  },
  listdecoration: {
    textDecoration: 'none',
  },
}))

export default function NavBar(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const [cookies, removeCookie] = useCookies(['auth_token'])
  const history = useHistory()

  // Removing User's Session Upon Log out
  function handleRemoveCookie() {
    removeCookie('auth_token')
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='absolute'
        className={clsx(
          classes.appBar,
          classes.style,
          open && classes.appBarShift
        )}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            {/* <MenuIcon /> */}
            <img
              src='https://res.cloudinary.com/dhexix4cn/image/upload/v1626617737/teamup/logo_sbei3p.png'
              alt='logo'
              className={classes.logo}
            />
          </IconButton>
          <AppBar />

          {props.title !== 'Dashboard' ? (
            <Link to='#' style={{ textDecoration: 'none', color: '#fff' }}>
              <ListItem button style={{ color: '#7865E5' }}>
                {/* <ListItemIcon style={{ color: '#7865E5' }}> */}
                <ArrowBackIcon onClick={() => history.goBack()} />
                {/* </ListItemIcon> */}
              </ListItem>
            </Link>
          ) : (
            <div></div>
          )}

          <Typography
            component='h1'
            variant='h6'
            color='inherit'
            noWrap
            className={classes.title}
          >
            {props.title}
          </Typography>

          <Typography variant='body2' className={classes.username}>
            {`Welcome User!`}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <img
              src='https://res.cloudinary.com/dhexix4cn/image/upload/v1626617737/teamup/logo2_ihf6xr.png'
              alt='logo'
              className={classes.logo}
            />
            {/* <ChevronLeftIcon /> */}
          </IconButton>
        </div>
        <List style={{ color: 'white' }}>
        <ListItems/>
        </List>
        {/* <List style={{ color: 'white' }}>{ListItems}</List> */}
        {/* <Divider />
        <List style={{ color: 'white' }}>{secondaryListItems}</List> */}
      </Drawer>
    </div>
  )
}
