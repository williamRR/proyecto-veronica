import React, { useReducer } from "react"
import PrivateRoute from "auth/Auth"
import { BrowserRouter, Switch } from "react-router-dom"
import routes from "utils/routes.config"
import Layout from "components/layout/Layout"

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
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
      </Layout>
    </BrowserRouter>
  )
}

export default Router
