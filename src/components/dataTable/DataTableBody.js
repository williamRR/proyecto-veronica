import React, { useCallback } from "react"
import { useHistory } from "react-router-dom"
import {
  TableRow,
  TableCell,
  TableBody,
  Link,
  Typography,
  makeStyles,
  Tooltip,
  Grid,
  IconButton,
  withStyles,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Switch,
} from "@material-ui/core"
import areTwoObjectsEqual from "utils/areTwoObjectsEqual"
import Loading from "components/Loading"
import VisibilityIcon from "@material-ui/icons/Visibility"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import { useSnackbar } from "notistack"

const useStyle = makeStyles((theme) => ({
  selected: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black,
  },
  link: {
    cursor: "pointer",
  },
}))

const DataTableBody = ({
  rows,
  emptyMessage,
  selected,
  url,
  newHeaders,
  path,
  setSelected,
  loading,
  selectable,
}) => {
  const history = useHistory()
  const classes = useStyle()
  const { enqueueSnackbar } = useSnackbar()

  const handleClick = useCallback(
    (row, header) => {
      let newUrl = "/" + path + "/" + row[`${header.att}`]
      history.push(newUrl)
    },
    [history, path]
  )

  const getStyle = (row) => {
    if (areTwoObjectsEqual(row, selected)) return classes.selected
    return null
  }

  const unselectLogic = (row) => {
    if (areTwoObjectsEqual(row, selected)) setSelected(null)
    else setSelected(row)
  }

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      minWidth: 150,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid black",
    },
  }))(Tooltip)

  const renderUrl = (row, header) => {
    if (header.att === "present")
      return (
        <TableCell
          className={getStyle(row)}
          padding={"none"}
          key={header.att}
          size="small"
          align="center"
        >
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label={"Presente"}
            />
          </FormGroup>
          {/* <FormControl>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              // value={value}
              // onChange={handleChange}
            >
              <FormControlLabel
                value="present"
                control={<Radio />}
                label="Presente"
              />
              <FormControlLabel
                value="absent"
                control={<Radio />}
                label="Ausente"
              />
            </RadioGroup>
          </FormControl> */}
        </TableCell>
      )
    if (header.att === "subjects")
      return (
        <TableCell
          className={getStyle(row)}
          padding={"none"}
          key={header.att}
          size="small"
          align="center"
        >
          Ver
        </TableCell>
      )
    if (header.att === "active")
      return (
        <TableCell
          className={getStyle(row)}
          padding={"none"}
          key={header.att}
          size="small"
          align="center"
        >
          {row[`${header.att}`] ? "Activo" : "Inactivo"}
        </TableCell>
      )
    if (header.att === "password")
      return (
        <TableCell
          className={getStyle(row)}
          padding={"none"}
          key={header.att}
          size="small"
          align="center"
        >
          **********
        </TableCell>
      )
    if (header.att === "updatedAt" || header.att === "createdAt")
      return (
        <TableCell
          className={getStyle(row)}
          padding={"none"}
          key={header.att}
          size="small"
          align="center"
        >
          {row[`${header.att}`]?.substring(11, 16).concat("      ")}
          {row[`${header.att}`]?.substring(0, 10)}
        </TableCell>
      )
    if (
      typeof row[`${header.att}`] === "object" &&
      typeof row[`${header.att}`] != null
    )
      return (
        <TableCell
          className={getStyle(row)}
          padding={"none"}
          key={header.att}
          size="small"
          align="center"
        >
          Sin Data
        </TableCell>
      )
    if (url === header.att) {
      if (header.att === "transport" && row.transport.length > 7)
        return (
          <TableCell
            className={getStyle(row)}
            padding={"none"}
            onClick={() => (selectable ? unselectLogic(row) : null)}
            key={header.att}
            size="small"
            align="center"
          >
            <Link
              className={classes.link}
              underline="none"
              onClick={() => handleClick(row, header)}
            >
              <Typography noWrap>
                {row[`${header.att}`].substring(0, 7)}
              </Typography>
            </Link>
          </TableCell>
        )
      else
        return (
          <TableCell
            className={getStyle(row)}
            padding={"none"}
            key={header.att}
            size="small"
            align="center"
            onClick={() => (selectable ? unselectLogic(row) : null)}
          >
            <Link
              className={classes.link}
              underline="none"
              onClick={() => handleClick(row, header)}
            >
              <Typography noWrap>{row[`${header.att}`]}</Typography>
            </Link>
          </TableCell>
        )
    } else {
      return (
        <TableCell
          padding={"none"}
          className={getStyle(row)}
          size="small"
          key={header.att}
          onClick={() => (selectable ? unselectLogic(row) : null)}
          align="center"
        >
          <Typography noWrap>{row[`${header.att}`] || "Sin info"}</Typography>
        </TableCell>
      )
    }
  }

  if (loading)
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={`${newHeaders.length}`} align="left">
            <Loading tableLoading />
          </TableCell>
        </TableRow>
      </TableBody>
    )

  if (!rows.length)
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={`${newHeaders.length}`} align="left">
            <Typography> {emptyMessage} </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    )

  return (
    <TableBody>
      {rows.map((row) => {
        return (
          <TableRow key={row.id}>
            {newHeaders.map((header) => {
              return renderUrl(row, header)
            })}
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default DataTableBody
