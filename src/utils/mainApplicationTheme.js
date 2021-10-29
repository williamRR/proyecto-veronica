import { createTheme } from "@material-ui/core/styles"

const mainApplicationTheme = createTheme({
  shadows: ["none"],
  zIndex: {
    appBar: 1251,
    modal: 1250,
  },
  breakpoints: {},
  typography: {
    fontFamily: ["Ubuntu"].join(","),
    fontSize: 12,
  },
  palette: {
    background: {
      default: "#f5f7f9",
    },
    primary: {
      main: "#20d3ed",
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
