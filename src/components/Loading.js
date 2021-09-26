import React, { useCallback } from "react"
import { Grid, makeStyles, CircularProgress } from "@material-ui/core"

const Loading = ({ context }) => {
  const classes = useStyle()

  const getContext = useCallback(() => {
    const BUTTON_CONTEXT = {
      button: classes.button,
      table: classes.table,
      loading: classes.loading,
    }
    return BUTTON_CONTEXT[context]
  }, [classes.button, classes.table, classes.loading, context])

  return (
    <>
      <Grid container item xs={12} justify="center" alignContent="center">
        <CircularProgress className={getContext()} />
      </Grid>
    </>
  )
}

const useStyle = makeStyles((theme) => ({
  loading: {
    marginTop: theme.spacing(20),
  },
  button: {
    fill: "currentColor",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fontSize: "1.3928571428571428rem",
    transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    flexShrink: 0,
    userSelect: "none",
  },
  table: {
    marginTop: theme.spacing(23),
    marginBottom: theme.spacing(20),
  },
}))
export default Loading
