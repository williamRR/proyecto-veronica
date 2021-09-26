import React, { useCallback } from "react"
import { Redirect, Route } from "react-router"
// import * as appDispatcher from "./../redux/actions/planningDispatcher"
// import jwt_decode from "jwt-decode"
// import NotFound404 from "components/NotFound404"

const PrivateRoute = ({
  component: Component,
  publicAccess,
  hasRole,
  ...rest
}) => {
  // const { user, setUser } = appDispatcher.useUser()

  // let userPermissions

  // const parseToken = useCallback(
  //   (tkn) => {
  //     let decoded = jwt_decode(tkn)
  //     const { permissions, user } = decoded
  //     const newPermissions = JSON.parse(permissions).permissions
  //     localStorage.setItem("idToken", tkn)
  //     setUser({
  //       ...JSON.parse(user),
  //       permissions: newPermissions[0].accesses,
  //       token: tkn,
  //       apiKey: process.env.REACT_APP_API_KEY,
  //     })
  //     return newPermissions[0].accesses
  //   },
  //   [setUser]
  // )

  // if (!user && localStorage.getItem("idToken")) {
  //   userPermissions = parseToken(localStorage.getItem("idToken"))
  // }

  // if (publicAccess)
  //   return (
  //     <Route {...rest}>
  //       <Component />
  //     </Route>
  //   )

  // if (!user && !localStorage.getItem("idToken")) return <Redirect to="/" />

  // if (
  //   hasRole &&
  //   (user?.permissions?.includes(hasRole) || userPermissions?.includes(hasRole))
  // )
  return (
    <Route {...rest}>
      <Component />
    </Route>
  )
  // else if (hasRole) return <Redirect to="/forbidden" />
  // else
  //   return (
  //     <Route>
  //       <NotFound404 />
  //     </Route>
  //   )
}

export default PrivateRoute
