import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "15vh",
    maxWidth: "100vw",
    marginLeft: "0vw",
    [theme.breakpoints.up("md")]: {
      marginTop: "8vh",

      marginLeft: "1vw",
      maxWidth: "80vw",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "8vh",

      maxWidth: "83vw",
      marginLeft: "1vw",
    },
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

const NotFound404 = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      justify="center"
      direction="column"
      className={classes.root}
    >
      <Typography
        variant="h4"
        color="textSecondary"
        align="center"
        className="mb-16 font-normal"
      >
        La página que buscas no pudo ser encontrada.
      </Typography>
      <Link align="center" underline="none" to="/" className={classes.link}>
        Volver al inicio.
      </Link>
    </Grid>
  )
}

export default NotFound404
