import React from "react"
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  makeStyles,
} from "@material-ui/core"

const useStyle = makeStyles((theme) => ({
  head: {
    backgroundColor: "#333333",
    color: theme.palette.common.white,
    maxWidth: 170,
    minWidth: 170,
  },
  columnLabel: {
    color: "white",
    "&:active, &.MuiTableSortLabel-active, &.MuiTableSortLabel-active.MuiTableSortLabel-root.MuiTableSortLabel-active":
      {
        color: theme.palette.common.white,
      },
  },
}))

const DataTableHeader = ({ newHeaders, sort, setPaginator }) => {
  const classes = useStyle()

  const evaluateSort = (header) => {
    return sort?.field === header?.root && sort?.entity === header?.entity
  }

  const handleClick = (header) => {
    if (!header.computed) {
      setPaginator(header, "sort")
    }
  }

  return (
    <TableHead>
      <TableRow>
        {newHeaders.map((header) => {
          return (
            <TableCell
              className={classes.head}
              key={header.att}
              padding={"none"}
              align="center"
              // sortDirection={evaluateSort(header) ? sort.order : false}
            >
              {/* <TableSortLabel
                classes={{ root: classes.columnLabel }}
                active={header.computed ? null : evaluateSort(header)}
                direction={evaluateSort(header) ? sort?.order : "asc"}
                onClick={() => handleClick(header)}
              > */}
              {header.label}
              {/* </TableSortLabel> */}
            </TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
}

export default DataTableHeader
