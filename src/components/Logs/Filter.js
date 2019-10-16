import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import DatePicker from "./DatePicker";

export default function Filter(props) {
  return (
    <>
      <FormLabel component="legend">Filter by:</FormLabel>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" name="position" value={"bottom"} row>
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                onClick={props.handleInfoChange}
                checked={props.infoChecked}
                color="default"
              />
            }
            label="Info"
            labelPlacement="end"
          />
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                onChange={props.handleErrorChange}
                checked={props.errorChecked}
                color="default"
              />
            }
            label="Error"
            labelPlacement="end"
          />
          <FormControlLabel
            value="top"
            control={
              <DatePicker
                name="fromDate"
                handleDateChange={props.handleDateChange}
              />
            }
            label="From:"
            labelPlacement="start"
          />
          <FormControlLabel
            value="top"
            control={
              <DatePicker
                name="toDate"
                handleDateChange={props.handleDateChange}
              />
            }
            label="To:"
            labelPlacement="start"
          />
        </FormGroup>
      </FormControl>
    </>
  );
}
