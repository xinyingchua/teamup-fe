import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#F9F8FF",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 8px",
    fill: "#0072ea",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
    color: "#000",
    fontWeight: 700,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    background: "#7865E5",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },

  logo: {
    maxWidth: 75,
  },

  style: {
    background: "#fff",
  },

  username: {
    color: "#000",
    fontWeight: 300,
  },

  divider: {
    // Theme Color, or use css color in quote
    background: "theme.palette.divider",
  },
  listdecoration: {
    textDecoration: "none",
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* NavBar */}
      
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, classes.style)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton>
              {/* <MenuIcon /> */}
              <img
                src="https://res.cloudinary.com/dhexix4cn/image/upload/v1626617737/teamup/logo_sbei3p.png"
                alt="logo"
                className={classes.logo}
              />
            </IconButton>

            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            ></Typography>

            <Link
            to={'/login'}
            style={{ textDecoration: 'none', color: '#fff' }}>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginRight: "20px" }}
            >
              Login
            </Button>
            </Link>
            <Link
            to={'/register'}
            style={{ textDecoration: 'none', color: '#fff' }}>
            <Button variant="contained" color="secondary">
              Register
            </Button>
            </Link>

          </Toolbar>
        </AppBar>
      
      {/* NavBar Ends */}

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

      </main>
    </div>
  );
}
