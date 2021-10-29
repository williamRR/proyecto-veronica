import React, { useCallback, useEffect } from "react"
import { Redirect, Route } from "react-router"
import * as authDispatcher from "./../redux/actions/authDispatcher"
import jwt_decode from "jwt-decode"
import NotFound404 from "components/NotFound404"
import axios from "axios"

const PrivateRoute = ({
  component: Component,
  publicAccess,
  hasRole,
  ...rest
}) => {
  const { user, setUser } = authDispatcher.useUser()

  let userPermissions

  useEffect(() => {
    let access = ""
    try {
      access = localStorage.getItem("access_token")
    } catch {
      localStorage.removeItem("access_token")
    }

    if (user) {
      axios.interceptors.request.use((request) => {
        request.headers["authorization"] = "Bearer ".concat(access)
        return request
      })
    }
  }, [user])

  const parseToken = useCallback(
    (access_token) => {
      let decoded = jwt_decode(access_token)
      setUser(decoded)
      return decoded.authorities
    },
    [setUser]
  )
  if (!user && localStorage.getItem("access_token")) {
    userPermissions = parseToken(localStorage.getItem("access_token"))
  }

  if (publicAccess)
    return (
      <Route {...rest}>
        <Component />
      </Route>
    )

  if (!user && !localStorage.getItem("access_token")) return <Redirect to="/" />

  if (
    hasRole &&
    (user?.authorities?.includes(hasRole) || userPermissions?.includes(hasRole))
  )
    return (
      <Route {...rest}>
        <Component />
      </Route>
    )
  else if (hasRole) return <Redirect to="/forbidden" />
  else
    return (
      <Route>
        <NotFound404 />
      </Route>
    )
}

export default PrivateRoute
