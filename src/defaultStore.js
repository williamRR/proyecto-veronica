// Store. Main store creation from redux to manage a global state in the whole
// application. It needs a store creation, a list of middlewares inside a
// composer (mainly to add more libraries like redux-dev-tools and redux-thunk)
// and a main reducer
import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "redux/reducers/rootReducer"

// Function used to import redux-dev-tools to be used in the browser. It is
// configured to only be shown when running the app in development mode, it
// also needs to have redux dev tools running in the browser in order for the
// app to work
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose

const defaultStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware())
  )
}

export default defaultStore
