import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(15),
    justify: "center",
  },
  link: {
    textTransform: "none",
    marginTop: 20,
    textDecoration: " none",
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
  },
}))

const Forbidden = () => {
  const classes = useStyles()

  return (
    <Grid
      item
      container
      justify="center"
      xs={9}
      md={4}
      className={classes.root}
    >
      <Typography variant="h1" color="inherit" className="font-medium mb-16">
        Ups!
      </Typography>

      <Typography
        variant="h4"
        color="textSecondary"
        align="center"
        className="mb-16 font-normal"
      >
        No tienes acceso a la página solicitada.
      </Typography>

      <Link align="center" underline="none" to="/" className={classes.link}>
        Volver al inicio.
      </Link>
    </Grid>
  )
}

export default Forbidden
