import React, { useState, useEffect } from "react"
import {
  Button,
  DialogActions,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  TextField,
  CircularProgress,
} from "@material-ui/core"
import Autocomplete from "@material-ui/lab/Autocomplete"
import Paper from "@material-ui/core/Paper"

import { useForm, Controller } from "react-hook-form"
import Form from "./Form"
import axios from "axios"
import { Typography } from "@material-ui/core"
import capitalizer from "../utils/capitalizer"
import capitalizeWordsOnSentence from "../utils/capitalizeWordsOnSentence"
const useStyle = makeStyles((theme) => ({
  filter: {
    marginTop: "1vw",
    marginBottom: "1vw",
  },
  button: {
    marginRight: "auto",
    marginBottom: 20,
    marginLeft: "auto",
  },
}))
const AddEditModal = ({
  handleSave,
  edit,
  loadingBut,
  setDialogOpen,
  handleClose,
  dialogOpen,
  entity,
  verb,
  handleDelete,
}) => {
  const { handleSubmit, setError, control, errors, watch, setValue } = useForm()

  const classes = useStyle()
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState([])
  const [suppliers, setSuppliers] = useState([])
  const [cities, setCities] = useState([])

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={dialogOpen}
    >
      <DialogTitle align="center" onClose={handleClose}>
        {capitalizer(verb)} {entity}
      </DialogTitle>
      <DialogContent align="center" dividers>
        Atención! Esta acción no puede deshacerse. ¿Realmente desea {verb}
        este {entity}?.
      </DialogContent>
      <DialogActions>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => {
            handleClose()
          }}
        >
          Cancelar
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          size="small"
          disabled={loadingBut}
          onClick={() => {
            handleDelete()
          }}
        >
          {loadingBut ? <CircularProgress size={20} /> : "Continuar"}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddEditModal
