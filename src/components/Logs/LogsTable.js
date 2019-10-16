import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TablePaginationActions from "./TablePaginationActions";
import OneLog from "./OneLog";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 650
  },
  tableWrapper: {
    overflowX: "auto"
  }
}));

export default function Logs({ url }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [apiUrl] = useState(url);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setLogs(result.data);
    };
    fetchData();
  }, [apiUrl, url]);
  function handleChangePage(event, newPage) {
    setPage(newPage);
  }
  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, logs.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Message</TableCell>
                <TableCell align="left">Level</TableCell>
                <TableCell align="left">Origin</TableCell>
                <TableCell align="left">Created at</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {logs
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(log => (
                  <OneLog key={log.id} log={log} />
                ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={logs.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { "aria-label": "rows per page" },
                    native: true
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    </div>
  );
}
