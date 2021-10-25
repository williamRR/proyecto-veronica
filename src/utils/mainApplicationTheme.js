import { createTheme } from "@material-ui/core/styles"

const mainApplicationTheme = createTheme({
  shadows: ["none"],
  zIndex: {
    appBar: 1251,
    modal: 1250,
  },
  breakpoints: {},
  typography: {
    fontFamily: ["Oswald', sans-serif"].join(","),
    fontSize: 13,
  },
  palette: {
    background: {
      default: "#F2F2F2",
    },
    primary: {
      light: "#e5007e",
      main: "#e5007e",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "white",
      main: "#white",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
})

export default mainApplicationTheme
