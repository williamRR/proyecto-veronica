import React from "react"
import PrivateRoute from "auth/PrivateRoute"
import { BrowserRouter, Switch } from "react-router-dom"
// import Layout from "components/layout/Layout"
import routes from "utils/routes.config"

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Switch>
        {routes.map((route) => {
          return (
            <PrivateRoute
              exact
              key={route.id}
              publicAccess={route.public}
              hasRole={route.hasRole}
              path={route.route}
              component={route.component}
            />
          )
        })}
      </Switch>
      {/* </Layout> */}
    </BrowserRouter>
  )
}

export default Router
