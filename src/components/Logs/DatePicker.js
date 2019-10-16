import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function DatePicker({ name, date, handleDateChange }) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        name={name}
        defaultValue={date}
        onChange={handleDateChange}
        id="date"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}
