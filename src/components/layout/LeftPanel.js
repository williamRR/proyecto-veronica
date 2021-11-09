import React, { useCallback } from "react"
import {
  Grid,
  IconButton,
  ListItemText,
  List,
  Button,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useHistory, useLocation } from "react-router-dom"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import LayersIcon from "@material-ui/icons/Layers"
import routes from "utils/routes.config"
import * as authDispatcher from "../../redux/actions/authDispatcher"
import { logOut } from "auth/authService"

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    borderRadius: 0,
    paddingTop: 90,
    // border: "1px solid silver",
    backgroundColor: "#252e3d",
  },
  button: {
    color: "#9aa0aa",

    marginRight: 15,
    textTransform: "none",
  },
  logout: {
    marginBottom: 25,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  selected: {
    color: "#ced2d7",
    marginRight: 15,

    textTransform: "none",
    overflow: "hidden",
  },
  passwordRecovery: {
    marginBottom: 99,
    textTransform: "none",
  },
}))

const LeftPanel = ({
  inDrawer = false,
  setOpen = true,
  shouldRenderLayout,
}) => {
  const classes = useStyle()
  let history = useHistory()
  let location = useLocation()

  const { user, setUser } = authDispatcher.useUser()

  const { authorities } = user || []

  const handleClick = useCallback(
    ({ route }) => {
      if (inDrawer) setOpen(false)
      return history.push(`${route}`)
    },
    [history, inDrawer, setOpen]
  )

  const shouldRenderButton = useCallback(
    ({ hasRole }) => {
      if (!authorities?.includes(hasRole)) return false
      return true
    },
    [authorities]
  )

  const isSelected = useCallback(
    (item) => {
      return item.route.split("/")[1] === location.pathname.split("/")[1]
        ? classes.selected
        : classes.button
    },
    [location.pathname, classes.selected, classes.button]
  )

  if (!shouldRenderLayout) return null

  return (
    <Grid
      container
      justify="space-between"
      alignContent="center"
      className={classes.root}
      item
      xs={12}
      direction="column"
    >
      <List component="nav">
        {routes
          .filter((item) => item.item)
          .map((item) => {
            return (
              shouldRenderButton(item) && (
                <ListItem
                  button
                  onClick={() => {
                    handleClick(item)
                  }}
                  className={isSelected(item)}
                  key={item.id}
                >
                  <ListItemIcon style={{ justifyContent: "right" }}>
                    <LayersIcon className={isSelected(item)} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1">{item.label}</Typography>
                    }
                  />
                </ListItem>
              )
            )
          })}
      </List>
      <Grid container direction="column">
        <IconButton
          className={classes.logout}
          onClick={() => {
            logOut()
            if (inDrawer) setOpen(false)
            history.push("/")
            setUser(null)
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

export default LeftPanel
