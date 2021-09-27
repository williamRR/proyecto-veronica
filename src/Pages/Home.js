import { Button, Grid } from "@material-ui/core"
import React from "react"
import { Link, useHistory } from "react-router-dom"

const Home = () => {
  let history = useHistory()
  return (
    <Grid
      item
      container
      xs={12}
      justify="center"
      alignContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} container justify="center">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => history.push("/attendance")}
        >
          Tomar Asistencia
        </Button>
      </Grid>

      <Grid item xs={12} container justify="center" style={{ marginTop: 10 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/attendance")}
        >
          Ver histórico
        </Button>
      </Grid>
    </Grid>
  )
}

export default Home
