import {
  makeStyles,
  Grid,
  Typography,
  Tooltip,
  IconButton,
  Dialog,
  DialogTitle,
  CircularProgress,
  DialogContent,
} from "@material-ui/core"
import axios from "axios"
import { useSnackbar } from "notistack"
import React, { useState, useEffect } from "react"
import getHeadersOfAnArrayOfObjects from "../utils/getHeadersOfAnArrayOfObjects"
import AddEditModal from "./AddEditModal"
import ConfirmModal from "./ConfirmModal"
import DataTable from "./dataTable/DataTable"
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"
import CreateIcon from "@material-ui/icons/Create"
import { useLocation } from "react-router-dom"
import DescriptionIcon from "@material-ui/icons/Description"
import * as authDispatcher from "./../redux/actions/authDispatcher"

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "calc(100%-25px)",
    maxHeight: "calc(100%-25px)",
    width: "99%",
    marginTop: "20px",
  },
  title: {
    marginBottom: 10,
    marginLeft: 10,
  },
  buttons: {
    maxWidth: "100vw",
  },
  button: {
    textTransform: "none",
    marginLeft: "1vw",
    marginRight: "1vw",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: "#25306c",
    },
  },
}))

const GeneralMantainer = ({ fetchEntity, label, fields, url, helpData }) => {
  let location = useLocation()
  const { enqueueSnackbar } = useSnackbar()
  const classes = useStyle()
  const [modalOpen, setModalOpen] = useState(false)
  const [objects, setObjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selected, setSelected] = useState(null)
  const [edit, setEdit] = useState(false)
  const [params, setParams] = useState({})
  const [error, setError] = useState(false)
  const [shouldUpdate, setShouldUpdate] = useState(false)
  const [loadingBut, setLoadingBut] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [file, setFile] = useState(null)
  const { user, setUser } = authDispatcher.useUser()
  const [page, setPage] = useState(0)
  const [order, setOrder] = useState({ field: "createdAt", sort: "asc" })
  const [size, setSize] = useState(15)

  // useEffect(() => {
  //   if (shouldUpdate) {
  //     setIsLoading(true)
  //     fetchData()
  //     setShouldUpdate(false)
  //   }
  // }, [shouldUpdate])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setIsLoading(true)

    await axios
      .get(
        `${fetchEntity}/page/${page}/size/${size}/order/${order.field}/sort/${order.sort}`
      )
      .then((res) => {
        const {
          data: { content },
        } = res
        setObjects(content)
      })
      .catch((err) => {
        setIsLoading(false)
        setObjects([])
        setError(true)
        enqueueSnackbar("Algo sali?? mal", {
          variant: "error",
        })
      })
    setIsLoading(false)
  }

  // const handleEdit = async (data) => {
  //   setLoadingBut(true)
  //   let newData
  //   let newUrl
  //   if (location.pathname === "/addresses") {
  //     newData = data
  //     newData.city = data.city[0]
  //   }
  //   if (editOnParam) {
  //     newUrl = editUrl.concat(selected.id).concat("/")
  //     newData = data
  //     if (location.pathname === "/admin_products") {
  //       newData.category = data.category[0]
  //       newData.supplier = data.supplier[0]
  //     }
  //   } else {
  //     newUrl = editUrl
  //     newData = { ...data, id: selected.id }
  //   }
  //   await axios
  //     .put(newUrl, newData)
  //     .then((res) => {
  //       setSelected(null)
  //       handleClose()
  //       fetchData()
  //       enqueueSnackbar("??xito en la operaci??n", {
  //         variant: "success",
  //       })
  //     })
  //     .catch((err) => {
  //       enqueueSnackbar("Algo sali?? mal", {
  //         variant: "error",
  //       })
  //     })
  //   setShouldUpdate(true)
  //   setLoadingBut(false)
  // }

  // const handleSaveWithBody = async (data) => {
  //   setLoadingBut(true)
  //   const newData = new FormData()

  //   Object.keys(data).forEach((key) => {
  //     newData.append(key, data[key])
  //   })
  //   const config = {
  //     headers: {
  //       "content-type": "multipart/form-data",
  //     },
  //   }
  //   await axios
  //     .post(postUrl, newData, config)
  //     .then((res) => {
  //       handleClose()
  //       enqueueSnackbar("Operaci??n exitosa", {
  //         variant: "success",
  //       })
  //       setShouldUpdate(true)
  //     })
  //     .catch((res) => {
  //       enqueueSnackbar(Object.values(res.response.data)[0][0], {
  //         variant: "error",
  //       })
  //     })

  //   setLoadingBut(false)
  // }

  // const handleEditWithBody = async (data) => {
  //   setLoadingBut(true)
  //   const newData = new FormData()
  //   Object.keys(data).forEach((key) => {
  //     if (
  //       location.pathname === "/admin_products" &&
  //       key === "expiration_date"
  //     ) {
  //       if (!data.expiration_date) newData.append("expiration_date", "")
  //       else newData.append(key, data[key])
  //     } else if (
  //       location.pathname === "/admin_products" &&
  //       key === "category"
  //     ) {
  //       newData.append("category", data.category[0])
  //     } else if (
  //       location.pathname === "/admin_products" &&
  //       key === "supplier"
  //     ) {
  //       newData.append("supplier", data.supplier[0])
  //     } else newData.append(key, data[key] || null)
  //   })

  //   const config = {
  //     headers: {
  //       "content-type": "multipart/form-data",
  //     },
  //   }
  //   await axios
  //     .put(fetchEntity.concat(selected.id).concat("/"), newData, config)
  //     .then((res) => {
  //       handleClose()
  //       enqueueSnackbar("Operaci??n exitosa", {
  //         variant: "success",
  //       })
  //       setShouldUpdate(true)
  //     })
  //     .catch((res) => {
  //       enqueueSnackbar(Object.values(res.response.data)[0][0], {
  //         variant: "error",
  //       })
  //     })

  //   setLoadingBut(false)
  // }

  const handleSave = async (data) => {
    setLoadingBut(true)
    await axios
      .post(
        fetchEntity,
        data
        // {
        // auth: {
        //   username: "frontend",
        //   password: "12345",
        // },
        // }
      )
      .then((res) => {
        handleClose()
        enqueueSnackbar("Operaci??n exitosa", {
          variant: "success",
        })
        setShouldUpdate(true)
      })
      .catch((res) => {
        enqueueSnackbar(Object.values(res.response.data), {
          variant: "error",
        })
      })
    fetchData()
    setLoadingBut(false)
  }

  let newHeaders = getHeadersOfAnArrayOfObjects(objects)

  const handleClose = () => {
    setModalOpen(false)
  }

  // const handleDelete = async () => {
  //   setLoadingBut(true)
  //   let newUrl
  //   newUrl = deleteUrl.concat(selected.id).concat("/")
  //   await axios
  //     .delete(newUrl)
  //     .then((res) => {
  //       setSelected(null)
  //       handleClose()
  //       fetchData()
  //       enqueueSnackbar("??xito en la operaci??n", {
  //         variant: "success",
  //       })
  //     })
  //     .catch((err) => {
  //       enqueueSnackbar("Algo sali?? mal", {
  //         variant: "error",
  //       })
  //     })
  //   setDialogOpen(false)
  //   setShouldUpdate(true)
  //   setIsLoading(false)
  //   setLoadingBut(false)
  // }

  // const shouldRenderButtons = () => {
  //   if (!readOnlyUsers) return true
  //   if (readOnlyUsers.includes(role)) return false
  //   return true
  // }

  const setPaginator = (e, option) => {
    let newParams = params
    switch (option) {
      case "page":
        setParams({ ...newParams, page: parseInt(e) })
        break
      case "size":
        setParams({ ...newParams, limit: e.target.value, page: 1 })
        break
    }
  }

  return (
    <Grid item className={classes.root}>
      {/* <Dialog
        open={documentModalOpen}
        maxWidth="md"
        fullWidth={true}
        onClose={() => setDocumentModalOpen(false)}
      >
        <DialogTitle>Detalle de compra</DialogTitle>
        <DialogContent>
          {docLoading ? (
            <Grid
              container
              justify="center"
              id="viewer"
              item
              style={{ minHeight: "60vh", maxHeight: "60vh" }}
            >
              <CircularProgress
                size={39}
                style={{ marginTop: 100, marginBottom: 100 }}
              />
            </Grid>
          ) : (
            <Grid
              container
              justify="center"
              id="viewer"
              item
              style={{ minHeight: "60vh", maxHeight: "60vh" }}
            >
              {file !== "" && (
                <iframe
                  src={file}
                  style={{ width: "100%", marginLeft: 20 }}
                  frameborder="0"
                ></iframe>
              )}
            </Grid>
          )}
        </DialogContent>
      </Dialog>
      <ConfirmModal
        dialogOpen={dialogOpen}
        handleClose={() => {
          setDialogOpen(false)
        }}
        setDialogOpen={setDialogOpen}
        entity={fetchEntity}
        verb="eliminar "
        loadingBut={loadingBut}
        handleDelete={handleDelete}
      />
       */}

      <AddEditModal
        edit={edit}
        open={modalOpen}
        entity={label}
        handleClose={handleClose}
        // handleEdit={setsBinaryOnPost ? handleEditWithBody : handleEdit}
        loadingBut={loadingBut}
        object={selected}
        fields={fields}
        handleSave={handleSave}
        helpData={helpData}
      />

      <Typography align="left" className={classes.title} variant="h5">
        {label}
      </Typography>
      <DataTable
        rows={objects}
        height={"payments"}
        selectable
        selected={selected}
        emptyMessage={"No se encontraron objetos"}
        setSelected={setSelected}
        url={url}
        isLoading={isLoading}
        // paginatorCurrentPage={params.page}
        paginatorCurrentPage={page}
        // paginatorSize={params.limit}
        paginatorSize={size || 50}
        // paginatorTotalObjects={count}
        paginatorTotalObjects={objects.length}
        // setPaginator={setPaginator}
        setPaginator={setPaginator}
        headers={newHeaders}
        error={error}
      />

      <Grid item container xs={12} className={classes.buttons} justify="center">
        <Tooltip title="Eliminar" placement="top">
          <span>
            <IconButton
              className={classes.button}
              disabled={!selected || !selected?.is_active}
              onClick={() => {
                setDialogOpen(true)
              }}
            >
              <HighlightOffIcon />
            </IconButton>
          </span>
        </Tooltip>

        <Tooltip title="Editar" placement="top">
          <span>
            <IconButton
              className={classes.button}
              disabled={!selected}
              onClick={() => {
                setEdit(true)
                setModalOpen(true)
              }}
            >
              <CreateIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Agregar" placement="top">
          <IconButton
            className={classes.button}
            onClick={() => {
              setEdit(false)
              setSelected(null)
              setModalOpen(true)
            }}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  )
}

export default GeneralMantainer
