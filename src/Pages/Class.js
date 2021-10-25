import React, { useEffect, useMemo, useState } from "react"
import _ from "lodash"
import pupilsHeaders from "utils/constants/headers/pupilsHeaders"
import axios from "axios"
import attendanceParser from "utils/parsers/attendanceParser"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import PersonPinIcon from "@mui/icons-material/PersonPin"
import {
  FormControlLabel,
  Grid,
  Table,
  TableBody,
  CircularProgress,
  Switch,
  Button,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { useSnackbar } from "notistack"
import { useHistory } from "react-router"
import { DateTime } from "luxon"

const useStyles = makeStyles((theme) => ({
  tabs: {
    marginBottom: 20,
    "& .MuiTabs-indicator": {
      // display: "none",
      backgroundColor: "#08575b",
    },
  },
}))

const Class = () => {
  const [isDataLoading, setIsDataLoading] = useState(true)
  const { enqueueSnackbar } = useSnackbar()
  let history = useHistory()
  const [disableAssistence, setDisableAssistence] = useState(false)
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [pupils, setPupils] = useState([])
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const fetchData = () => {
    setIsDataLoading(true)
    axios
      .get(
        `http://localhost:8080/api/validateAttendance/${DateTime.now()
          .toString()
          .substring(0, 10)}`
      )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    axios.get("http://localhost:8080/api/pupils").then((res) => {
      const { data } = res
      setPupils(attendanceParser(data))
    })
    setIsDataLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const sendAttendance = () => {
    axios
      .post("http://localhost:8080/api/attendances", {
        listOfAttendance: pupils,
        date: DateTime.now().toFormat("yyyy-MM-dd"),
        subject: "Lenguaje",
      })
      .then(() => {
        enqueueSnackbar(`Asistencia registrada correctamente`, {
          variant: "info",
          autoHideDuration: 1000,
        })
        setDisableAssistence(true)
      })
      .catch((err) => {
        let msg = err.response.data.message

        enqueueSnackbar(`Error:` + msg, {
          variant: "error",
          autoHideDuration: 2500,
        })
      })
  }
  const changeAttendance = (row) => {
    let newPupil = pupils.find((pupil) => pupil.pupil === row.pupil)
    newPupil.present = !newPupil.present
    let newPupils = pupils
    newPupils.splice(newPupils.indexOf(newPupil), 1)
    newPupils.push(newPupil)
    setPupils(_.sortBy(newPupils, "pupil"))
  }

  function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    )
  }

  return (
    <>
      <Tabs
        value={value}
        // textColor="secondary"
        className={classes.tabs}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value={0}
          style={{ color: "#08575b" }}
          label="Asistencia"
          icon={<PersonPinIcon />}
        />
        <Tab
          value={1}
          // style={{ color: "#08575b" }}
          label="Leccionario"
          icon={<PersonPinIcon />}
          disabled
        />
        <Tab
          value={2}
          disabled
          // style={{ color: "#08575b" }}
          label="Otra cosa"
          icon={<PersonPinIcon />}
        />
        <Tab
          value={3}
          disabled
          // style={disabled ? { color: "#08575b" }}
          label="Planificación"
          icon={<PersonPinIcon />}
        />
      </Tabs>
      <Grid
        item
        xs={12}
        style={{
          // backgroundColor: "#66a5ad",
          padding: 15,
          overflow: "auto",
          height: 650,

          // borderRadius: 40,
          // border: "1px solid #08575b",
        }}
      >
        <Box sx={{ width: "100%", overflow: "hidden", height: 400 }}>
          {value === 0 && (
            <TabContainer>
              <TableContainer>
                <Table
                  size="small"
                  stickyHeader
                  style={
                    {
                      // border: "1px solid #08575b",
                      // backgroundColor: "silver",
                    }
                  }
                >
                  <TableHead>
                    <TableRow>
                      {pupilsHeaders.map((header) => {
                        return (
                          <TableCell
                            style={{
                              border: "1px solid silver",
                              backgroundColor: "#333333",
                              color: "white",
                            }}
                            // className={classes.head}
                            key={header.att}
                            padding={"none"}
                            align="center"
                            // sortDirection={evaluateSort(header) ? sort.order : false}
                          >
                            {/* <TableSortLabel
                classes={{ root: classes.columnLabel }}
                active={header.computed ? null : evaluateSort(header)}
                direction={evaluateSort(header) ? sort?.order : "asc"}
                onClick={() => handleClick(header)}
              > */}
                            <Typography variant="body1">
                              {header.label}
                            </Typography>
                            {/* </TableSortLabel> */}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {isDataLoading ? (
                      <TableRow>
                        <TableCell align="center" colSpan={2}>
                          <CircularProgress />
                        </TableCell>
                      </TableRow>
                    ) : (
                      pupils.map((row) => {
                        return (
                          <TableRow
                            key={row.pupilId}
                            padding="{none}"
                            style={{ border: "0px" }}
                          >
                            <TableCell
                              align="center"
                              padding={"none"}
                              style={{
                                backgroundColor: "#3E4F5B",
                                color: "#FFFFFF",
                              }}
                            >
                              <Typography variant="body2">
                                {row.name}{" "}
                              </Typography>
                            </TableCell>
                            <TableCell
                              align="center"
                              padding={"none"}
                              style={{
                                backgroundColor: "#3E4F5B",
                                color: "#FFFFFF",
                              }}
                            >
                              <FormControlLabel
                                control={
                                  <Switch
                                    color={"default"}
                                    style={
                                      row.present
                                        ? { color: "#d3e3b6" }
                                        : { color: "#ff9b9b" }
                                    }
                                    checked={row.present}
                                    disabled={disableAssistence}
                                    onChange={() => changeAttendance(row)}
                                  />
                                }
                                // label={
                                //   row.present ? (
                                //     <Typography
                                //       variant="body2"
                                //       style={{ color: "green" }}
                                //     >
                                //       Presente
                                //     </Typography>
                                //   ) : (
                                //     <Typography
                                //       variant="body2"
                                //       style={{ color: "orange" }}
                                //     >
                                //       Ausente
                                //     </Typography>
                                //   )
                                // }
                              />
                            </TableCell>
                          </TableRow>
                        )
                      })
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <Grid
                item
                xs={12}
                container
                justify="center"
                style={{ marginTop: 30 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => sendAttendance()}
                >
                  Enviar
                </Button>
                {disableAssistence && (
                  <Typography>
                    La asistencia para este día ya está registrada.
                  </Typography>
                )}
              </Grid>
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              Ingrese la información de la clase
              <input type="submit" disabled={disableAssistence} />
            </TabContainer>
          )}
          {value === 2 && <TabContainer>Item Three</TabContainer>}
        </Box>
      </Grid>
    </>
  )
}

export default Class
