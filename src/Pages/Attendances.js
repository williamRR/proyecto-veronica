import axios from "axios"
import React, { useState, useEffect } from "react"
import { useHistory } from "react-router"
import VisibilityIcon from "@material-ui/icons/Visibility"
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core"
import CheckIcon from "@mui/icons-material/Check"
import ClearIcon from "@mui/icons-material/Clear"
import _ from "lodash"
import { DateTime } from "luxon"

const Attendances = () => {
  const [attendances, setAttendances] = useState([])
  const [isDataLoading, setIsDataLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [assistenceData, setAssistenceData] = useState({})
  let history = useHistory()

  const fetchData = () => {
    setIsDataLoading(true)
    axios.get("http://localhost:8080/api/attendances").then((res) => {
      const { data } = res
      setAttendances(_.sortBy(data, "date").reverse())
    })
    setIsDataLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const viewAssistance = (id) => {
    axios.get(`http://localhost:8080/api/attendances/${id}`).then((res) => {
      const { data } = res
      setAssistenceData(data)
      setModalOpen(true)
    })
  }

  const handleClose = () => {
    setAssistenceData({})
    setModalOpen(false)
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid silver",
    boxShadow: 24,
    p: 4,
  }

  return (
    <Grid container justify="center" style={{ border: "1px solid black" }}>
      <Modal open={modalOpen} onClose={handleClose}>
        <Box sx={style}>
          <Grid container justify="center">
            <Grid
              item
              container
              justify="space-around"
              style={{ marginBottom: 20 }}
            >
              <Typography variant="caption text">
                Presentes: {assistenceData.presents}
              </Typography>
              <Typography variant="caption text">
                Ausentes: {assistenceData.absents}
              </Typography>
              <Typography variant="caption text">
                Porcentaje Inasistencia: {assistenceData.perc}%
              </Typography>
            </Grid>
            <TableContainer>
              <Table
                size="small"
                stickyHeader
                style={{ border: "1px solid silver" }}
              >
                <TableBody>
                  {isDataLoading ? (
                    <TableRow>
                      <TableCell align="center" colSpan={2}>
                        <CircularProgress />
                      </TableCell>
                    </TableRow>
                  ) : (
                    <>
                      {assistenceData?.assistence?.map(
                        ({ id, name, present }) => {
                          return (
                            <TableRow key={id}>
                              <TableCell align="center" padding={"none"}>
                                <Typography variant="body2">{name} </Typography>
                              </TableCell>

                              <TableCell>
                                {present ? (
                                  <CheckIcon style={{ color: "olive" }} />
                                ) : (
                                  <ClearIcon style={{ color: "brown" }} />
                                )}
                              </TableCell>
                            </TableRow>
                          )
                        }
                      )}
                    </>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Box>
      </Modal>
      <Grid item xs={12} container justify="center">
        <Typography>Lista de asistencia</Typography>
      </Grid>
      <Grid item xs={8} style={{ marginTop: 20 }}>
        <TableContainer>
          <Table
            size="small"
            stickyHeader
            style={{ border: "1px solid silver" }}
          >
            <TableBody>
              {isDataLoading ? (
                <TableRow>
                  <TableCell align="center" colSpan={2}>
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : (
                attendances.map((row) => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell align="center" padding={"none"}>
                        <Typography variant="body2">{row.date}</Typography>
                      </TableCell>
                      <TableCell align="center" padding={"none"}>
                        <Typography variant="body2">{row.subject}</Typography>
                      </TableCell>
                      <TableCell align="center" padding={"none"}>
                        <IconButton
                          size="small"
                          onClick={() => viewAssistance(row.attendanceId)}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid item xs={12} container justify="center" style={{ marginTop: 29 }}>
          <Button variant="outlined" onClick={() => history.goBack()}>
            Volver
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Attendances
