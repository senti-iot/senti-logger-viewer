import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

export default function OneLog({ log }) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {log.id}
      </TableCell>
      <TableCell align="left">{log.message}</TableCell>
      <TableCell align="left">{log.level}</TableCell>
      <TableCell align="left">{log.origin}</TableCell>
      <TableCell align="left">{log.timestamp}</TableCell>
    </TableRow>
  );
}
