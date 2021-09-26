import React from "react"
import { Grid, Hidden, makeStyles } from "@material-ui/core"
import TopPanel from "components/layout/TopPanel"
import LeftPanel from "components/layout/LeftPanel"
import { useLocation } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "8vh",
    maxWidth: "98vw",
    marginLeft: "1vw",
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      marginLeft: "1vw",
      maxWidth: "calc(100% - 270px)",
    },
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  let location = useLocation()

  const shouldRenderLayout = () => {
    if (
      location.pathname === "/" ||
      location.pathname === "/recover" ||
      location.pathname === "/update-password" ||
      location.pathname === "/terms" ||
      location.pathname === "/reset-password"
    )
      return null
    return classes.root
  }

  return (
    <Grid container>
      <TopPanel />
      <Hidden smDown>
        <LeftPanel />
      </Hidden>
      <Grid container justify="center" className={shouldRenderLayout()}>
        {children}
      </Grid>
    </Grid>
  )
}

export default Layout
