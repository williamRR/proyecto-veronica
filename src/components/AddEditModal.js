import React, { useState, useEffect } from "react"
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core"
import Autocomplete from "@material-ui/lab/Autocomplete"
import Paper from "@material-ui/core/Paper"
import IconButton from "@material-ui/core/IconButton"
import PhotoCamera from "@material-ui/icons/PhotoCamera"
import { useForm, Controller } from "react-hook-form"
import Form from "./Form"
import axios from "axios"
import { useLocation } from "react-router-dom"
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
  open,
  fields,
  entity,
  handleClose,
  handleEdit,
  object,
  loadingBut,
  helpData,
}) => {
  const { handleSubmit, setError, control, errors, watch, setValue } = useForm()
  let location = useLocation()

  const onSubmit = async (data) => {
    let newData = data
    // if (location.pathname === "/admin_products") newData.image = file
    // if (location.pathname === "/admin_categories") newData.img = file
    if (Object.values(errors).length === 0)
      edit ? handleEdit(newData) : handleSave(newData)
  }

  const classes = useStyle()
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState([])
  const [suppliers, setSuppliers] = useState([])
  const [cities, setCities] = useState([])
  const [products, setProducts] = useState([])
  const [file, setFile] = useState()
  const getOptions = (fieldName) => {
    console.log(helpData.schools)
    switch (fieldName) {
      case "school":
        return helpData.schools
      case "supplier":
        return suppliers
      case "purchase_detail":
        return products
      case "city":
        return cities
      default:
        return []
    }
  }

  // const fetchData = async () => {
  //   let res
  //   res = await axios.get(
  //     "https://portafolio-7euzwpl5ea-ue.a.run.app/api/category/"
  //   )
  //   setCategories(res.data)
  //   res = await axios.get(
  //     "https://portafolio-7euzwpl5ea-ue.a.run.app/api/maintainer/supplier/"
  //   )
  //   setSuppliers(res.data)
  //   res = await axios.get(
  //     "https://portafolio-7euzwpl5ea-ue.a.run.app/api/product/"
  //   )

  //   setProducts(res.data.results)
  //   res = await axios.get(
  //     "https://chile-coronapi.herokuapp.com/api/v4/historical/communes"
  //   )

  //   let newCityes = []
  //   Object.values(res.data[13]).forEach((com) => newCityes.push(com.commune))
  //   setCities(newCityes)
  //   setIsLoading(false)
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  const handleCapture = ({ target }) => {
    const fileReader = new FileReader()
    const name = target.accept.includes("image") ? "images" : "videos"
    setFile(target.files[0])
    // fileReader.readAsDataURL(target.files[0])
    // fileReader.onload = (e) => {
    //   setFile((prevState) => ({
    //     [name]: [...prevState[name], e.target.result],
    //   }))
    // }
  }

  const [items, setItems] = useState([])

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        {edit ? "Editar " : "Agregar "}
        {entity}
      </DialogTitle>
      <DialogContent>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {fields.map(
            ({ placeholder, rules, name, label, type, isKeyValue }) => {
              if (type === "autocomplete")
                return (
                  <Controller
                    key={name}
                    name={name}
                    // defaultValue={getOptions(name) && getOptions(name)[0]?.id}
                    defaultValue={object && object[name]}
                    control={control}
                    onChange={(data) => data.id || data.name || data}
                    render={(props) => (
                      <Autocomplete
                        id={name}
                        disableClearable
                        clearOnEscape
                        disabled={isKeyValue && edit}
                        defaultValue={
                          object && object[name] // getOptions(name) && getOptions(name)[0]?.id
                        }
                        onChange={(_, data) => {
                          props.onChange([data.id || data.name || data])
                        }}
                        noOptionsText="No se ha encontrado esa alternativa"
                        // defaultValue={isLoading ? {} : getOptions(name)[0]}
                        PaperComponent={({ children }) => (
                          <Paper style={{ border: "1px solid grey" }}>
                            {children}
                          </Paper>
                        )}
                        options={getOptions(name)}
                        getOptionLabel={(option) =>
                          option?.name || option?.first_name || option
                        }
                        renderInput={(params) => (
                          <TextField
                            label={label}
                            // error={errors[`${name}`] ? true : false}
                            className={classes.filter}
                            {...params}
                            size="small"
                            variant="outlined"
                          />
                        )}
                      />
                    )}
                  />
                )
              else if (type === "multiAutocomplete") {
                return (
                  <Controller
                    key={name}
                    name={name}
                    defaultValue={products.length > 0 ? products : []}
                    control={control}
                    // onChange={([data]) => console.log(data)}
                    render={(props) => (
                      <Autocomplete
                        id={name}
                        multiple
                        disabled={isKeyValue && edit}
                        clearOnEscape
                        disableClearable
                        // defaultValue={}
                        defaultValue={[]}
                        onChange={(_, data) => console.log(data)}
                        noOptionsText="No se ha encontrado esa alternativa"
                        // defaultValue={isLoading ? {} : getOptions(name)[0]}
                        PaperComponent={({ children }) => (
                          <Paper style={{ border: "1px solid grey" }}>
                            {children}
                          </Paper>
                        )}
                        options={getOptions(name)}
                        getOptionLabel={(option) =>
                          option.name || option.first_name
                        }
                        renderInput={(params) => (
                          <TextField
                            label={label}
                            // error={errors[`${name}`] ? true : false}
                            className={classes.filter}
                            {...params}
                            size="small"
                            variant="outlined"
                            // component={TextField}
                          />
                        )}
                      />
                    )}
                  />
                )
              } else
                return (
                  <Controller
                    name={name}
                    control={control}
                    defaultValue={
                      name === "image"
                        ? null
                        : name === "img"
                        ? null
                        : name === "expiration_date"
                        ? ""
                        : object && object[[name]]
                    }
                    rules={rules}
                    as={
                      type === "file" ? null : (
                        <TextField
                          className={classes.filter}
                          id={name}
                          label={label}
                          disabled={isKeyValue && edit}
                          type={type}
                          fullWidth
                          placeholder={placeholder}
                          error={errors[`${name}`] ? true : false}
                          size="small"
                          InputLabelProps={{ shrink: true }}
                          variant="outlined"
                          autoComplete="false"
                          helperText={
                            errors[`${name}`] && errors[`${name}`].message
                          }
                        />
                      )
                    }
                  />
                )
            }
          )}
          {location.pathname === "/admin_products" && (
            <>
              {" "}
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-photo"
                onChange={(e) => handleCapture(e)}
                type="file"
              />
              <label htmlFor="icon-button-photo">
                <IconButton color="primary" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
            </>
          )}
          {location.pathname === "/admin_categories" && (
            <>
              {" "}
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-photo"
                onChange={(e) => handleCapture(e)}
                type="file"
              />
              <label htmlFor="icon-button-photo">
                <IconButton color="primary" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
            </>
          )}

          <Grid container style={{ marginTop: 20 }}>
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
              disabled={Object.values(errors).length > 0 || loadingBut}
              size="small"
            >
              {loadingBut ? <CircularProgress size={20} /> : "Guardar"}
            </Button>
          </Grid>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddEditModal
