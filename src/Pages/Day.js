import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  Typography,
} from "@material-ui/core"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import ButtonXd from "components/button/ButtonXd"
import { useHistory } from "react-router-dom"

import React from "react"

const Day = () => {
  const [expanded, setExpanded] = React.useState(0)

  const handleExpandClick = (e, id) => {
    e.preventDefault()
    if (id === expanded) return setExpanded(0)
    setExpanded(id)
  }
  let history = useHistory()
  const isCardExpanded = (id) => {
    return id === expanded
  }

  const clases = [
    { id: 1, nombre: "Lenguaje", active: false, background: "#fe9900" },
    {
      id: 2,
      nombre: "Matemática",
      active: true,
      background: "#00688f",
      timeLeft: "En 47 minutos",
    },
    { id: 3, nombre: "Historia", active: false, background: "#ed1b25" },
    { id: 4, nombre: "Biología", active: false, background: "#436b0b" },
    {
      id: 5,
      nombre: "Taller de manzana",
      active: false,
      background: "#d47ea5",
    },
  ]
  return (
    console.log(expanded),
    (
      <div>
        <Typography variant="h4" style={{ color: "#1A1A1A" }}>
          Clases de hoy
        </Typography>
        <Grid
          item
          container
          xs={12}
          justify="flex-start"
          style={{ marginTop: 30 }}
        >
          {clases.map((clase) => {
            return (
              <Grid>
                <Card
                  // sx={{ minWidth: 275 }}

                  style={{
                    margin: 10,
                    borderRadius: 20,
                    maxWidth: 250,
                    minWidth: 250,
                    background: "#00355B80",
                    paddingTop: 15,
                    paddingLeft: 15,
                    cursor: "pointer",
                  }}
                >
                  <CardContent
                    onClick={() => {
                      history.push(`/day/classes/${clase.id}`)
                    }}
                  >
                    <Typography
                      variant="h4"
                      style={{ color: "white" }}
                      gutterBottom
                    >
                      {clase.nombre}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ color: "white" }}
                      gutterBottom
                    >
                      {clase.timeLeft}
                    </Typography>
                  </CardContent>
                  <CardActions
                    disableSpacing
                    style={{ justifyContent: "center" }}
                    onClick={(e) => handleExpandClick(e, clase.id)}
                  >
                    {expanded === clase.id ? (
                      <ExpandLessIcon
                        style={{ hover: "cursor", color: "white" }}
                        expand={isCardExpanded(clase.id)}
                        aria-expanded={expanded}
                        aria-label="show more"
                      />
                    ) : (
                      <ExpandMoreIcon
                        style={{ hover: "cursor", color: "white" }}
                        expand={isCardExpanded(clase.id)}
                        aria-expanded={expanded}
                        aria-label="show more"
                      />
                    )}
                  </CardActions>
                  <Collapse
                    in={isCardExpanded(clase.id)}
                    timeout="auto"
                    unmountOnExit
                  >
                    <CardContent>
                      <ButtonXd
                        variant="subject"
                        color="white"
                        // onClick={handleSubmit(onSubmit)}
                        disabled={
                          false
                          // buttonDisabled() || Object.keys(errors).length > 0
                        }
                        text="Ir a la asignatura"
                      />
                      <ButtonXd
                        color="white"
                        variant="level"
                        // onClick={handleSubmit(onSubmit)}
                        disabled={
                          false
                          // buttonDisabled() || Object.keys(errors).length > 0
                        }
                        text="Ir al nivel "
                      />
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  )
}

export default Day
