import React from "react"
import { Provider } from "react-redux"
import { ThemeProvider } from "@material-ui/core/styles"
import { SnackbarProvider } from "notistack"
import Router from "./Router"
import defaultSTore from "./defaultStore"
import mainApplicationTheme from "utils/mainApplicationTheme"
import { CssBaseline } from "@material-ui/core"
import axios from "axios"

function App() {
  const store = defaultSTore()

  axios.defaults.baseURL = process.env.REACT_APP_BASE_RESOURCE_URL

  return (
    <Provider store={store}>
      <ThemeProvider theme={mainApplicationTheme}>
        <CssBaseline />
        <SnackbarProvider
          maxSnack={2}
          transitionDuration={{ appear: 250, enter: 250, exit: 250 }}
        >
          <Router />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
