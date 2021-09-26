import React, { useCallback } from "react"
import {
  Grid,
  IconButton,
  ListItemText,
  List,
  Button,
  ListItem,
  ListItemIcon,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useHistory, useLocation } from "react-router-dom"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import LayersIcon from "@material-ui/icons/Layers"
import routes from "utils/routes.config"
import withAWSAuth from "auth/withAWSAuth"
import * as appDispatcher from "../../redux/actions/planningDispatcher"

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "60vw",
    height: "100vh",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.up("sm")]: {
      maxWidth: "210px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "240px",
    },
  },
  button: {
    color: "white",
    textAlign: "left",
    justifyContent: "left",
    textTransform: "none",
    overflow: "hidden",
  },
  logout: {
    marginBottom: 25,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  selected: {
    color: theme.palette.primary.light,
    textAlign: "left",
    justifyContent: "left",
    textTransform: "none",
    overflow: "hidden",
  },
  passwordRecovery: {
    // marginBottom: 99,
    // marginTop: 30,
    textTransform: "none",
  },
}))

const LeftPanel = ({ awsAuth, inDrawer = false, setOpen = true }) => {
  const classes = useStyle()
  let history = useHistory()
  let location = useLocation()

  const { user, setUser } = appDispatcher.useUser()

  const { permissions } = user || []

  const handleClick = useCallback(
    ({ route }) => {
      if (inDrawer) setOpen(false)
      return history.push(`${route}`)
    },
    [history, inDrawer, setOpen]
  )

  const shouldRenderButton = useCallback(
    ({ hasRole }) => {
      if (!permissions?.includes(hasRole)) return false
      return true
    },
    [permissions]
  )

  const isSelected = useCallback(
    (item) => {
      return item.route.split("/")[1] === location.pathname.split("/")[1]
        ? classes.selected
        : classes.button
    },
    [location.pathname, classes.selected, classes.button]
  )

  if (location.pathname === "/") return null
  if (location.pathname === "/recover") return null
  if (location.pathname === "/update-password") return null
  if (location.pathname === "/terms") return null
  if (location.pathname === "/reset-password") return null

  return (
    <Grid
      container
      justify="space-around"
      alignContent="center"
      className={classes.root}
      item
      xs={12}
      direction="column"
    >
      <List component="nav" aria-label="">
        {routes
          .filter((item) => item.item)
          .map((item) => {
            return (
              shouldRenderButton(item) && (
                <ListItem
                  button
                  onClick={() => {
                    // setOpen(false)
                    handleClick(item)
                  }}
                  className={isSelected(item)}
                  style={{ paddingLeft: 35, paddingRight: 5 }}
                  key={item.id}
                >
                  <ListItemIcon style={{ minWidth: 30 }}>
                    <LayersIcon className={isSelected(item)} />
                  </ListItemIcon>
                  <ListItemText>{item.label}</ListItemText>
                </ListItem>
              )
            )
          })}
      </List>
      <Grid container direction="column">
        <IconButton
          className={classes.logout}
          onClick={() => {
            awsAuth.logOut()
            if (inDrawer) setOpen(false)
            setUser(null)
            history.push("/")
          }}
        >
          <PowerSettingsNewIcon color="primary" />
        </IconButton>
        <Button
          className={classes.passwordRecovery}
          variant="text"
          color="primary"
          onClick={() => history.push("/terms")}
        >
          Términos y condiciones
        </Button>
      </Grid>
    </Grid>
  )
}

export default withAWSAuth(LeftPanel)
