import React, { useMemo, useCallback } from "react"
import orderTableBasedOnIndex from "utils/orderTableBasedOnIndex"
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Grid,
  TablePagination,
  TableFooter,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import useWidth from "hooks/useWidth"
import TableHeader from "./DataTableHeader"
import DataTableBody from "./DataTableBody"

const useStyle = makeStyles((theme) => ({
  planningDetails: {
    minHeight: "80vh",
    maxHeight: "80vh",
    border: "1px solid silver",
    [theme.breakpoints.up("sm")]: {
      minHeight: "70vh",
      maxHeight: "70vh",
    },
    [theme.breakpoints.up("md")]: {
      minHeight: "72vh",
      maxHeight: "72vh",
    },
  },
  payments: {
    minHeight: "70vh",
    maxHeight: "70vh",
    border: "1px solid silver",
  },
  tracking: {
    border: "1px solid silver",
    minHeight: "55vh",
    maxHeight: "55vh",
    [theme.breakpoints.up("sm")]: {
      minHeight: "36vh",
      maxHeight: "36vh",
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: "60vh",
      maxHeight: "60vh",
    },
    [theme.breakpoints.up("xl")]: {
      minHeight: "70vh",
      maxHeight: "70vh",
    },
  },
  trackingDetails: {
    border: "1px solid silver",
    minHeight: "20vh",
    maxHeight: "20vh",
    [theme.breakpoints.up("sm")]: {
      minHeight: "40vh",
      maxHeight: "40vh",
    },
    [theme.breakpoints.up("md")]: {
      minHeight: "20vh",
      maxHeight: "20vh",
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: "50vh",
      maxHeight: "50vh",
    },
  },
  footerContainer: {
    borderBottom: "none",
  },
  pagination: {
    display: "inline-flex",
    overflow: "hidden",
  },
}))

const DataTable = ({
  rows,
  url,
  path,
  headers,
  emptyMessage,
  height,
  selected,
  setSelected,
  setPaginator,
  paginatorSize,
  paginatorCurrentPage,
  paginatorTotalObjects,
  sort,
  loading,
  selectable,
}) => {
  const [isSmallScreen] = useWidth()
  const classes = useStyle()

  let newHeaders = useMemo(
    () => orderTableBasedOnIndex({ headers, url }),
    [headers, url]
  )

  const getWidth = useCallback(() => {
    const TABLE_SIZES = {
      payments: classes.payments,
      planning: classes.planning,
      tracking: classes.tracking,
      trackingDetails: classes.trackingDetails,
    }

    return TABLE_SIZES[height]
  }, [
    classes.payments,
    classes.planning,
    classes.tracking,
    classes.trackingDetails,
    height,
  ])

  return (
    <Grid item sm={12} container justify="space-around">
      <TableContainer className={getWidth()}>
        <Table id="table-to-xls" size="small" stickyHeader>
          <TableHeader
            newHeaders={newHeaders}
            sort={sort}
            setPaginator={setPaginator}
          />
          <DataTableBody
            rows={rows}
            emptyMessage={emptyMessage}
            selected={selected}
            selectable={selectable}
            url={url}
            setSelected={setSelected}
            newHeaders={newHeaders}
            path={path}
            loading={loading}
          />
        </Table>
      </TableContainer>
      <TableContainer>
        <Table size="small">
          <TableFooter>
            <TableRow>
              <TableCell
                colSpan={isSmallScreen ? 1 : `${headers?.length}`}
                align="center"
                padding="none"
                className={classes.footerContainer}
              >
                {"Mostrando " + rows.length + " resultados"}
                <TablePagination
                  className={classes.pagination}
                  size="small"
                  component="div"
                  align="center"
                  count={paginatorTotalObjects}
                  page={paginatorCurrentPage}
                  rowsPerPageOptions={[15, 35, 50, 100]}
                  rowsPerPage={paginatorSize}
                  onChangePage={(e, page) => {
                    setPaginator(page, "page")
                  }}
                  onChangeRowsPerPage={(e) => {
                    setPaginator(e, "size")
                  }}
                  labelRowsPerPage="Objetos PP:"
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Grid>
  )
}

export default DataTable
