import React, { useCallback, useEffect } from "react"
import { Redirect, Route } from "react-router"
import * as authDispatcher from "../redux/actions/authDispatcher"
import jwt_decode from "jwt-decode"
import NotFound404 from "components/NotFound404"
import axios from "axios"
import { parseToken } from "./authService"

const PrivateRoute = ({
  component: Component,
  publicAccess,
  hasRole,
  ...rest
}) => {
  const { user } = authDispatcher.useUser()
  let { authorities } = user || []

  useEffect(() => {
    parseToken()
  }, [user])
  // useEffect(() => {
  //   let access = ""
  //   try {
  //     access = localStorage.getItem("accessToken")
  //   } catch {
  //     localStorage.removeItem("accessToken")
  //   }
  //   if (!access)
  //     axios.interceptors.request.use((request) => {
  //       request.headers["Authorization"] = null
  //       return request
  //     })
  // }, [user])
  // useEffect(() => {
  //   let access = ""
  //   try {
  //     access = localStorage.getItem("accessToken")
  //   } catch {
  //     localStorage.removeItem("accessToken")
  //   }

  //   if (user && access.length) {
  //     axios.interceptors.request.use((request) => {
  //       request.headers["authorization"] = "Bearer ".concat(access)
  //       return request
  //     })
  //   }
  //   // else {
  //   //   axios.interceptors.request.use((request) => {
  //   //     request.headers["authorization"] = ""
  //   //     return request
  //   //   })
  //   // }
  // }, [user])

  // const parseToken = useCallback(
  //   (access_token) => {
  //     let decoded = jwt_decode(access_token)
  //     setUser(decoded)
  //     return decoded.authorities
  //   },
  //   [setUser]
  // )

  // if (!user && localStorage.getItem("access_token")) {
  //   userPermissions = parseToken(localStorage.getItem("access_token"))
  // }

  if (publicAccess)
    return (
      <Route {...rest}>
        <Component />
      </Route>
    )

  // if (!user && !localStorage.getItem("access_token")) return <Redirect to="/" />

  if (hasRole && authorities?.includes(hasRole))
    return (
      <Route {...rest}>
        <Component />
      </Route>
    )
  else if (hasRole) return <Redirect to="/forbidden" />
  else return <Redirect to="/404" />
}

export default PrivateRoute
