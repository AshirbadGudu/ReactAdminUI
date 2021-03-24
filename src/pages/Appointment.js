import { Button, Card, CardContent } from "@material-ui/core";
import { GetApp } from "@material-ui/icons";
import React from "react";
import { Navigation } from "../components";
import { useAppointment } from "../hooks";
import { CSVLink } from "react-csv";
import { DataGrid } from "@material-ui/data-grid";

const Appointment = () => {
  const { appointment } = useAppointment();
  const columns = [
    { field: "slno", headerName: "SL No.", width: 100 },
    { field: "name", headerName: " Name", width: 200 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "subject", headerName: "Subject", width: 130 },
    { field: "message", headerName: "Message", width: 480 },
  ];
  const headers = [
    { label: "SL No.", key: "slno" },
    { label: " Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Subject", key: "subject" },
    { label: "Message", key: "message" },
  ];
  return (
    <Navigation>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "10px",
        }}
      >
        <CSVLink
          data={appointment}
          headers={headers}
          style={{ textDecoration: "none" }}
        >
          <Button
            startIcon={<GetApp />}
            variant="contained"
            component="label"
            style={{ margin: "10px" }}
          >
            Export
          </Button>
        </CSVLink>
      </div>
      <Card>
        <CardContent>
          <div style={{ height: 600, width: "100%" }}>
            <DataGrid rows={appointment} columns={columns} pageSize={8} />
          </div>
        </CardContent>
      </Card>
    </Navigation>
  );
};

export default Appointment;
