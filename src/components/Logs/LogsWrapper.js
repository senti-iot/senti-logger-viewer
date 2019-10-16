import React, { useState } from "react";
import Logs from "./LogsTable";
import Filter from "./Filter";
import moment from "moment";

export default function LogsWrapper() {
  const momentFormat = "YYYY-MM-DD";
  let today = moment();
  let fiveYearsAgo = moment().subtract(5, "years");

  const [url, setUrl] = useState({
    base: `http://localhost:3019/logs/`,
    from: fiveYearsAgo.format(momentFormat),
    to: today.format(momentFormat)
  });

  const [infoChecked, setInfoChecked] = useState(false);
  const [errorChecked, setErrorChecked] = useState(false);

  function handleInfoChange() {
    setErrorChecked(false);
    setInfoChecked(!infoChecked);
    setUrl({ ...url, base: "http://localhost:3019/log-info/" });
    if (infoChecked) {
      setInfoChecked(!infoChecked);
      setUrl({ ...url, base: "http://localhost:3019/logs/" });
    }
  }

  function handleErrorChange() {
    setInfoChecked(false);
    setErrorChecked(!errorChecked);
    setUrl({ ...url, base: "http://localhost:3019/log-error/" });
    if (errorChecked) {
      setErrorChecked(!errorChecked);
      setUrl({ ...url, base: "http://localhost:3019/logs/" });
    }
  }

  function handleDateChange(e) {
    if (e.target.value.length !== 0 && e.target.name === "fromDate") {
      setUrl({ ...url, from: e.target.value });
    }
    if (e.target.value.length === 0 && e.target.name === "fromDate") {
      setUrl({ ...url, from: "2019-01-01" });
    }
    if (e.target.value.length !== 0 && e.target.name === "toDate") {
      setUrl({ ...url, to: e.target.value });
    }
    if (e.target.value.length === 0 && e.target.name === "toDate") {
      setUrl({ ...url, to: "2019-08-31" });
    }
  }

  let finalUrl = url.base + url.from + "/" + url.to;

  return (
    <>
      <Filter
        handleInfoChange={handleInfoChange}
        handleErrorChange={handleErrorChange}
        infoChecked={infoChecked}
        errorChecked={errorChecked}
        handleDateChange={handleDateChange}
      />
      <Logs url={finalUrl} />
    </>
  );
}
