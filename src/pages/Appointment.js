import { Button, Card, CardContent } from "@material-ui/core";
import { Delete, GetApp } from "@material-ui/icons";
import React, { useState } from "react";
import { Navigation } from "../components";
import { useAppointment } from "../hooks";
import { CSVLink } from "react-csv";
import { DataGrid } from "@material-ui/data-grid";

const Appointment = () => {
  const { appointment } = useAppointment();
  const [appointmentId, setAppointmentId] = useState([]);

  const rows = appointment;
  console.log(rows);

  const columns = [
    { field: "slno", headerName: "SL No.", width: 100 },
    { field: "name", headerName: " Name", width: 200 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "subject", headerName: "Subject", width: 130 },
    { field: "message", headerName: "Message", width: 480 },
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
          data={rows}
          // headers={headers}
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
        <div
          style={{
            display: appointmentId.length ? "block" : "none",
            transition: "ease-out",
          }}
        >
          <Button
            startIcon={<Delete />}
            variant="contained"
            color="secondary"
            style={{ margin: "10px" }}
            // onClick={handleDelete}
          >
            Delete
          </Button>
        </div>

        <CardContent>
          <div style={{ height: 600, width: "100%" }}>
            <DataGrid
              rows={appointment}
              columns={columns}
              pageSize={8}
              checkboxSelection
              onRowSelected={(e) => {
                if (e?.isSelected)
                  setAppointmentId([...appointmentId, e.data.id]);
                else {
                  const index = appointmentId.indexOf(e.data.id);
                  if (index > -1) {
                    const array = appointmentId;
                    array.splice(index, 1);
                    setAppointmentId(array);
                  }
                  if (appointmentId.length < 1) setAppointmentId([]);
                }
              }}
            />
          </div>
        </CardContent>
      </Card>
    </Navigation>
  );
};

export default Appointment;
