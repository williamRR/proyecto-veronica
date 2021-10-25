import React, { useEffect, useMemo, useState } from "react"
import axios from "axios"
import pupilsHeaders from "utils/constants/headers/pupilsHeaders"
import DataTable from "components/dataTable/DataTable"
import attendanceParser from "utils/parsers/attendanceParser"
import {
  Button,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core"
import orderTableBasedOnIndex from "utils/orderTableBasedOnIndex"
import _ from "lodash"
import { DateTime } from "luxon"
import { useHistory } from "react-router"
import { useSnackbar } from "notistack"

const Attendance = () => {
  const [pupils, setPupils] = useState([])
  const [currentDate, setCurrentDate] = useState(
    DateTime.now().toFormat("yyyy-MM-dd")
  )
  const [subject, setSubject] = useState("Historia")
  const [isDataLoading, setIsDataLoading] = useState(true)
  let history = useHistory()
  const { enqueueSnackbar } = useSnackbar()

  const fetchData = () => {
    setIsDataLoading(true)
    axios.get("http://localhost:8080/api/pupils").then((res) => {
      const { data } = res
      setPupils(attendanceParser(data))
    })
    setIsDataLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const changeAttendance = (row) => {
    let newPupil = pupils.find((pupil) => pupil.pupil === row.pupil)
    newPupil.present = !newPupil.present
    let newPupils = pupils
    newPupils.splice(newPupils.indexOf(newPupil), 1)
    newPupils.push(newPupil)
    setPupils(_.sortBy(newPupils, "pupil"))
  }

  const sendAttendance = () => {
    axios
      .post("http://localhost:8080/api/attendances", {
        listOfAttendance: pupils,
        date: currentDate,
        subject: subject,
      })
      .then(() => {
        enqueueSnackbar(`Asistencia registrada correctamente`, {
          variant: "info",
          autoHideDuration: 1000,
        })
        history.push("/")
      })
      .catch((err) => {
        let msg = err.response.data.message

        enqueueSnackbar(`Error:` + msg, {
          variant: "error",
          autoHideDuration: 2500,
        })
      })
  }

  const obtainDate = () => {
    console.log(DateTime.now().toFormat("yyyy-MM-dd"))
    return null
  }

  return (
    <Grid container justify="center">
      <Grid item xs={12} container justify="center">
        <Typography style={{ margin: 10 }}>Seleccionar día</Typography>
        <input
          type="date"
          id="start"
          onChange={(e) => setCurrentDate(e.target.value)}
          name="trip-start"
          min="2018-01-01"
          value={currentDate}
          max={DateTime.now().toFormat("yyyy-MM-dd")}
          style={{ margin: 10 }}
        />
      </Grid>
      <Grid item xs={12} container justify="center">
        <Typography style={{ margin: 10 }}>Seleccionar Asignatura</Typography>
        <select
          onChange={(e) => setSubject(e.target.value)}
          style={{ margin: 10 }}
        >
          <option value="Lenguaje">Lenguaje</option>
          <option value="Historia" selected>
            Historia
          </option>
        </select>
      </Grid>
      <Grid item xs={8} style={{ marginTop: 20 }}>
        <TableContainer>
          <Table
            id="table-to-xls"
            size="small"
            stickyHeader
            style={{ border: "1px solid silver" }}
          >
            <TableHead>
              <TableRow style={{ border: "1px solid silver" }}>
                {pupilsHeaders.map((header) => {
                  return (
                    <TableCell
                      // className={classes.head}
                      key={header.att}
                      // padding={"none"}
                      align="center"
                      // sortDirection={evaluateSort(header) ? sort.order : false}
                    >
                      {/* <TableSortLabel
                classes={{ root: classes.columnLabel }}
                active={header.computed ? null : evaluateSort(header)}
                direction={evaluateSort(header) ? sort?.order : "asc"}
                onClick={() => handleClick(header)}
              > */}
                      <Typography variant="body1">{header.label}</Typography>
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
                    <TableRow key={row.pupilId}>
                      <TableCell align="center" padding={"none"}>
                        <Typography variant="body2">{row.name} </Typography>
                      </TableCell>
                      <TableCell align="center" padding={"none"}>
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
        <Grid item xs={12} container justify="center" style={{ marginTop: 29 }}>
          <Button variant="outlined" onClick={() => sendAttendance()}>
            Enviar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Attendance
