import React from "react"
import { IconButton, makeStyles, Tooltip, Typography } from "@material-ui/core"
import VARIANT_BUTTON from "utils/constants/variantButtons"

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: "none",
    // marginLeft: "1vw",
    marginRight: "1vw",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}))

const ButtonXd = ({ variant, onClick, text, disabled, loading }) => {
  const classes = useStyles()

  if (text)
    return (
      <Tooltip title={<Typography>{text}</Typography>} arrow placement="top">
        <span>
          <IconButton
            style={{ color: "#F2F2F2" }}
            disabled={loading || disabled}
            className={classes.button}
            onClick={onClick}
          >
            {VARIANT_BUTTON[variant]}
          </IconButton>
        </span>
      </Tooltip>
    )

  return <span>{VARIANT_BUTTON[variant]}</span>
}

export default ButtonXd
