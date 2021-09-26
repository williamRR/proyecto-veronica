import { createTheme } from "@material-ui/core/styles"

const mainApplicationTheme = createTheme({
  shadows: ["none"],
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  zIndex: {
    appBar: 1251,
    modal: 1250,
  },
  typography: {
    fontFamily: ["Ubuntu"].join(","),
    fontSize: 13,
  },
  palette: {
    text: {
      primary: "#666666",
      secondary: "#00000",
    },
    primary: {
      main: "#008ecc",
    },
    secondary: {
      main: "#333333",
    },
  },
})

export default mainApplicationTheme
