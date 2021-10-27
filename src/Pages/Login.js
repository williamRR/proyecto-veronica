import {
  Button,
  CircularProgress,
  Divider,
  Grid,
  Hidden,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core"
import React, { useState } from "react"
import image from "images/LoginLogo.png"
import Form from "components/Form"
import { Controller, useForm } from "react-hook-form"
import axios from "axios"
import { useSnackbar } from "notistack"
import * as authDispatcher from "../redux/actions/authDispatcher"
import jwt_decode from "jwt-decode"
import { useHistory, Redirect } from "react-router"

var querystring = require("querystring")

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: "100vw",
    minHeight: "100vh",
    maxWidth: "100vw",
    maxHeight: "100vh",
  },
  imageContainer: {
    justifyContent: "center",
    alignContent: "flex-end",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
      alignContent: "center",
    },
  },
  image: {
    maxHeight: "15vh",
    marginBottom: 30,
    [theme.breakpoints.up("md")]: {
      marginLeft: "auto",

      maxHeight: "25vh",
    },
  },
  formContainer: {
    justifyContent: "center",
    alignContent: "flex-start",
    [theme.breakpoints.up("md")]: {
      // marginRight: "auto",
      justifyContent: "flex-start",
      alignContent: "center",
    },
  },
  label: {
    marginBottom: "10px",
    color: theme.palette.text.primary,
  },
  textfield: {
    marginTop: "10px",
    width: "-webkit-fill-available",
  },
  button: {
    marginTop: "10px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    textTransform: "none",
  },
  passwordRecovery: {
    marginTop: theme.spacing(1),
    textTransform: "none",
  },
}))

const Home = () => {
  const history = useHistory()
  const classes = useStyle()
  const [loading, setLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const { user, setUser } = authDispatcher.useUser()

  const { handleSubmit, control, errors, setError } = useForm()

  const onSubmit = ({ username, password }) => {
    let formData = {
      username: username,
      password: password,
      grant_type: "password",
    }

    axios
      .post(process.env.REACT_APP_LOGIN_URL, querystring.stringify(formData), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: "frontend",
          password: "12345",
        },
      })
      .then((res) => {
        const {
          data: { access_token },
        } = res
        let decoded = jwt_decode(access_token)
        localStorage.setItem("access_token", access_token)
        setUser(decoded)
      })
      .catch((err) => {
        enqueueSnackbar(`Credemciales incorrectas`, {
          variant: "error",
          autoHideDuration: 2000,
        })
      })
  }

  if (user) return <Redirect to="/profile" />

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid
        className={classes.imageContainer}
        container
        item
        xs={10}
        md={4}
        lg={3}
      >
        <img src={`${image}`} className={classes.image} alt="logo" />
      </Grid>
      <Hidden smDown>
        <Grid>
          <Divider variant="middle" orientation="vertical" />
        </Grid>
      </Hidden>
      <Grid
        className={classes.formContainer}
        item
        container
        justify="flex-start"
        alignContent="center"
        xs={10}
        md={4}
        lg={3}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h5" className={classes.label}>
            Iniciar sesión
          </Typography>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            as={
              <TextField
                className={classes.textfield}
                fullWidth
                id="username"
                label="Usuario"
                error={Boolean(errors?.username)}
                size="small"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                autoComplete="false"
              />
            }
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            as={
              <TextField
                className={classes.textfield}
                id="password"
                fullWidth
                autoComplete="false"
                label="Password"
                error={Boolean(errors?.password)}
                size="small"
                type="password"
                helperText={errors?.password?.message}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
              />
            }
          />

          <Grid>
            <Button
              className={classes.button}
              fullWidth
              disabled={loading}
              variant="contained"
              color="primary"
              type="submit"
              size="small"
            >
              {loading ? <CircularProgress size={20} /> : "Continuar"}
            </Button>
          </Grid>
          <Button
            className={classes.passwordRecovery}
            fullWidth
            variant="text"
            color="primary"
            onClick={() => history.push("/recover")}
          >
            Recuperar clave
          </Button>
        </Form>
      </Grid>
    </Grid>
  )
}

export default Home
