import React, { useState } from "react"
import {
  Grid,
  Hidden,
  Typography,
  Drawer,
  AppBar,
  Toolbar,
  makeStyles,
} from "@material-ui/core"
import image from "images/cencosud.png"
import IconButton from "@material-ui/core/IconButton"
import { useLocation } from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu"
import LeftPanel from "./LeftPanel"

const useStyle = makeStyles((theme) => ({
  appBar: {
    border: "1px solid silver",
    width: "100vw",
    maxHeight: "7vh",
    minHeight: "7vh",
    backgroundColor: theme.palette.common.white,
  },
  location: {
    marginLeft: "5vw",
  },
  image: {
    maxHeight: "4vh",
    [theme.breakpoints.up("sm")]: {
      maxHeight: "5vh",
    },
  },
}))

const TopPanel = () => {
  const location = useLocation()
  const classes = useStyle()
  const [open, setOpen] = useState(false)

  if (location.pathname === "/") return null
  if (location.pathname === "/recover") return null
  if (location.pathname === "/update-password") return null
  if (location.pathname === "/terms") return null
  if (location.pathname === "/reset-password") return null

  return (
    <>
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.appBar}>
          <Hidden mdUp>
            <Grid container justify="center">
              <Grid item container justify="center" xs={2}>
                <IconButton
                  edge="start"
                  onClick={() => setOpen(!open)}
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  elevation={16}
                  open={open}
                  anchor="left"
                  variant="temporary"
                >
                  <LeftPanel inDrawer setOpen={setOpen} />
                </Drawer>
              </Grid>
              <Grid
                item
                container
                justify="center"
                alignContent="center"
                xs={7}
              >
                <img src={`${image}`} className={classes.image} alt="logo" />
              </Grid>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid item container alignItems="flex-start" xs={3}>
              <img src={`${image}`} className={classes.image} alt="logo" />
            </Grid>
            <Grid
              item
              container
              // justify="flex-start"
              alignItems="center"
              xs={5}
            >
              <Typography
                variant="h5"
                color="secondary"
                className={classes.location}
              >
                {/* {capitalizer(location)} */}
              </Typography>
            </Grid>
            <Grid item xs={4} />
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default TopPanel
