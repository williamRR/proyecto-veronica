import jwt_decode from "jwt-decode"
import axios from "axios"
var querystring = require("querystring")

export const isBrowser = () => typeof window !== "undefined"

export const handleLogin = async ({ username, password }) => {
  return signIn(username, password)
    .then((res) => {
      localStorage.setItem("accessToken", res)
      return true
    })
    .catch((err) => {
      return false
    })
}

const signIn = (username, password) => {
  let formData = {
    username: username,
    password: password,
    grant_type: "password",
  }

  return axios
    .post(
      process.env.REACT_APP_BASE_URL.concat("oauth/token"),
      querystring.stringify(formData),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: "frontend",
          password: "12345",
        },
      }
    )
    .then((res) => {
      const {
        data: { access_token },
      } = res
      return access_token
    })
    .catch((err) => {
      throw err
    })
}

export const parseToken = () => {
  if (localStorage.getItem("accessToken")) {
    const accessToken = localStorage.getItem("accessToken")
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    return jwt_decode(accessToken)
  }
  return null
}

export const logOut = () => {
  localStorage.removeItem("jwt_access_token")
  delete axios.defaults.headers.common.Authorization
}
